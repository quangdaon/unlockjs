import debug from 'debug';
import CheatCode from './cheatcode';
import Shortcut from './shortcut';

const log = debug('unlock:core');

export default class Unlock {

	@Private
	cheats = [];

	@Private
	keyslist = [];

	@Private
	_enabled = true;

	constructor(options = {}) {
		const {
			timeout = 500,
			resetOnMatch = false
		} = options;

		log('Unlock created.');

		this.timeout = timeout;

		Object.assign(this, {
			timeout,
			resetOnMatch
		});

		this.bindListener();
	}

	@Private
	bindListener() {
		let keyTimer;

		document.addEventListener('keydown', e => {
			this.keyslist.push(e.which);

			clearTimeout(keyTimer);
			keyTimer = setTimeout(() => {
				this.reset();
			}, this.timeout);

			this.cheats.forEach(cheat => {
				const matched = cheat.check(this.keyslist);
				if (matched && this.resetOnMatch) this.reset();
			});
		});
	}

	addCheat(...args) {
		const foundCheat = this.cheats.find(e => e.name === args[0] || e.name === args.name);
		if (foundCheat) {
			throw Error('A cheat has already been created with the name ' + foundCheat.name);
		}

		const cheatCode = new CheatCode(...args);
		this.cheats.push(cheatCode);

		return cheatCode;
	}

	reset() {
		this.keyslist.length = 0;
	}

	get length() {
		return this.cheats.length;
	}

	get enabled() {
		return this._enabled;
	}

	toggle(condition) {
		this._enabled = typeof condition !== 'undefined' ? condition : !this._enabled;
	}

	enable() {
		this.toggle(true);
	}

	disable() {
		this.toggle(false);
	}

	static CheatCode = CheatCode;

	static Shortcut = Shortcut;
}