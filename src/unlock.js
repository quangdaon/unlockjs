/* @module Unlock */

import CheatCode from './cheatcode';
import Shortcut from './shortcut';

import * as presets from './utils/presets';

/** Unlock object */
export default class Unlock {

	/**
	 * Array of cheats
	 * @private
	 * @type {Array<CheatCode>}
	 */
	#cheats = [];

	/**
	 * Array of shortcuts
	 * @private
	 * @type {Array<Shortcut>}
	 */
	#shortcuts = [];

	/**
	 * Current keys chain
	 * @private
	 * @type {Array<number>}
	 */
	#keyslist = [];

	/**
	 * Active state
	 * @private
	 * @type {boolean}
	 */
	#enabled = true;

	/**
	 * @typedef UnlockJSOptions
	 * @property {number} timeout - Duration before cheatcode timer resets,
	 * @property {boolean} resetOnMatch - Whether or not completing a cheatcode resets the timer
	 */

	/**
	 * @constructs Unlock
	 * @param {UnlockJSOptions} options
	 */
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

	/**
	 * Binds the event listener
	 * @private
	 */
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

	/**
	 * Adds a cheatcode
	 * @see {@link CheatCode.constructor} for parameters
	 * @returns {CheatCode}
	 */
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

	/**
	 * Adds a shortcut
	 * @see {@see Shortcut.constructor} for parameters
	 * @returns {Shortcut}
	 */
	addShortcut(...args) {
		const shortcut = new Shortcut(...args);
		this.#shortcuts.push(shortcut);

		return shortcut;
	}

	/**
	 * Finds a cheat created with Unlock by name
	 * @param {string} name - Name of cheatcode
	 * @returns {CheatCode}
	 */
	find(name) {
		return this.#cheats.find(e => e.name === name);
	}

	/**
	 * Resets the current keys chain
	 */
	reset() {
		this.#keyslist.length = 0;
	}

	/**
	 * @type {boolean}
	 * @readonly
	 */
	get enabled() {
		return this.#enabled;
	}

	/**
	 * Toggle the enabled state of the hotkey
	 * @param {boolean} [condition] - Force a toggle state
	 */
	toggle(condition) {
		this.#enabled = typeof condition !== 'undefined' ? condition : !this.#enabled;
	}

	/**
	 * Sets enabled to true, shorthand for Shortcut.toggle(true)
	 */
	enable() {
		this.toggle(true);
	}

	/**
	 * Sets enabled to false, shorthand for Shortcut.toggle(false)
	 */
	disable() {
		this.toggle(false);
	}

	/* @alias CheatCode */
	static CheatCode = CheatCode;

	/* @alias Shortcut */
	static Shortcut = Shortcut;

	static presets = presets;
}
