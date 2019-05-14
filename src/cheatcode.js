/* @module CheatCode */

import { keyMap, stringKeyMap } from './utils/maps';
import { arraysMatch } from './utils/helpers';

/**
 * @private
 * @param {Array<string>|string} v
 * @returns {Array<number>}
 */
function compileCode(v) {
	const codeArray = (typeof v === 'string') ? v.split('') : v;

	return codeArray
		.map(x => stringKeyMap[x] || x)
		.map(item => {
			// Since cheatcodes rely on keydown instead of keypress, single letters should use the uppercase by default
			const result = keyMap[item.toUpperCase()] || keyMap[item.toLowerCase()];

			if (!result) throw new Error(`Unrecognized key: ${item}`);

			return result;
		});
}

/* CheatCode Object */
export default class CheatCode {
	/**
	 * Callback function
	 * @private
	 * @type [Function]
	 */
	#callback = null;

	/**
	 * Compiled code array
	 * @private
	 * @type {Array<number>}
	 */
	#code = [];

	/**
	 * Current keys chain
	 * @private
	 * @type {Array<number>}
	 */
	#keyslist = [];

	/**
	 * setTimeout for keys
	 * @private
	 * @type {number}
	 */
	#keyTimer = null;


	/**
	 * Active state
	 * @private
	 * @type {boolean}
	 */
	#enabled = true;

	/**
	 * Duration before cheatcode timer resets
	 * @type {number}
	 */
	timeout = 500;

	/**
	 * @constructs CheatCode
	 * @param {string|Object} name - Identifier or settings object
	 * @param {string|array} code - Code
	 * @param {Function} callback - Callback function
	 */
	constructor(name, code, callback) {
		if (typeof name === 'object') {
			code = name.code;
			callback = name.callback;
			name = name.name;
		}

		this.name = name;
		this.code = code;
		this.callback = callback;

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	/**
	 * @type {Array<number>}
	 */
	set code(v) {
		this.#code = compileCode(v);
	}

	get code() {
		return this.#code;
	}

	/**
	 * @type {function}
	 */
	set callback(v) {
		this.#callback = v;
	}

	get callback() {
		return this.#callback;
	}

	/**
	 * @type {boolean}
	 * @readonly
	 */
	get enabled() {
		return this.#enabled;
	}

	/**
	 * Compare keylist with cheat code and trigger the callback
	 * @param {Array<string>} keys
	 * @returns {boolean}
	 */
	check(keys) {
		if (this.enabled && arraysMatch(this.code, keys)) {
			this.callback();
			return true;
		}
		return false;
	}

	/**
	 * Handles the keypress events
	 * @private
	 * @param {KeyboardEvent} e
	 */
	handleKeyPress(e) {
		this.#keyslist.push(e.keyCode);

		this.check(this.#keyslist);

		clearTimeout(this.#keyTimer);
		this.#keyTimer = setTimeout(() => {
			this.reset();
		}, this.timeout);
	}

	/**
	 * Bind the event listener
	 */
	bind() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	/**
	 * Unbind the event listener
	 */
	unbind() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	/**
	 * Resets the current keys chain
	 */
	reset() {
		this.#keyslist.length = 0;
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

	/**
	 * @alias compileCode
	 * @public
	 */
	static compile = compileCode;

	toJSON() {
		return {
			name: this.name,
			code: this.code
		};
	}

	toString() {
		return this.name;
	}
}