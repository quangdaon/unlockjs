import CheatCode from './cheatcode';
import Shortcut from './shortcut';

import * as presets from './utils/presets';

export default class Unlock {

	#cheats = [];

	#shortcuts = [];

	#keyslist = [];

	#enabled = true;

	constructor(options = {}) {
		const {
			timeout = 500,
			resetOnMatch = false
		} = options;

		this.timeout = timeout;

		Object.assign(this, {
			timeout,
			resetOnMatch
		});

		this.bindListener();
	}

	bindListener() {
		let keyTimer;

		document.addEventListener('keydown', e => {
			if (!this.enabled) return true;
			this.#keyslist.push(e.which);

			clearTimeout(keyTimer);
			keyTimer = setTimeout(() => {
				this.reset();
			}, this.timeout);

			this.#cheats.forEach(cheat => {
				const matched = cheat.check(this.#keyslist);
				if (matched && this.resetOnMatch) this.reset();
			});

			this.#shortcuts.forEach(shortcut => {
				shortcut.check(e);
			});
		});
	}

	addCheat(...args) {
		const name = typeof args[0] === 'string' ? args[0] : args.name;
		const foundCheat = this.find(name);
		if (foundCheat) {
			throw Error('A cheat has already been created with the name ' + foundCheat.name);
		}

		const cheatCode = new CheatCode(...args);
		this.#cheats.push(cheatCode);

		return cheatCode;
	}

	addShortcut(...args) {
		const shortcut = new Shortcut(...args);
		this.#shortcuts.push(shortcut);

		return shortcut;
	}

	find(name) {
		return this.#cheats.find(e => e.name === name);
	}

	reset() {
		this.#keyslist.length = 0;
	}

	get enabled() {
		return this.#enabled;
	}

	toggle(condition) {
		this.#enabled = typeof condition !== 'undefined' ? condition : !this.#enabled;
	}

	enable() {
		this.toggle(true);
	}

	disable() {
		this.toggle(false);
	}

	static CheatCode = CheatCode;

	static Shortcut = Shortcut;

	static presets = presets;
}
