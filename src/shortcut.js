/**
 * @file Shortcut Class
 * @author Quangdao Nguyen
 * @see Shortcut
 */

import { keyMap, metaMap, stringKeyMap } from './utils/maps';
import { objectSearch } from './utils/helpers';

const triggerRegex = /^(-)?([\^+!#]*)(.)$/;

/**
 * @typedef {Object} KeyEvent
 * @memberOf Shortcut
 * @property {string} keyCode - Numeric Key Code
 * @property {bool} ctrlKey - Ctrl is pressed
 * @property {bool} shiftKey - Shift is pressed
 * @property {bool} altKey - Alt is pressed
 * @property {bool} metaKey - Windows/Meta is pressed
 */

/**
 * @typedef {Object} HotKey
 * @memberOf Shortcut
 * @property {KeyEvent} keyEvent
 * @property {bool} preventDefault
 */

/**
 * @private
 * @param {string} string
 * @returns HotKey
 */
function parseHotkey(string) {
	const match = string.match(triggerRegex);
	if (!match) throw new Error('Invalid Hotkey: ' + string);

	const [, prevent, meta, key] = match;

	const keyEvent = {};

	const keyName = stringKeyMap[key] || key;

	keyEvent.keyCode = keyMap[keyName.toUpperCase()] || keyMap[keyName.toLowerCase()];

	if (!keyEvent.keyCode) throw new Error('Invalid Key: ' + key);

	Object.keys(metaMap).forEach(metaName => {
		const metaKey = metaMap[metaName];
		keyEvent[metaName] = meta.indexOf(metaKey) > -1;
	});

	return { keyEvent, preventDefault: !!prevent };
}

export default class Shortcut {
	/**
	 * Hotkey data
	 * @type {Object}
	 */
	data = {};

	/**
	 * Hotkey string
	 * @private
	 * @type {string}
	 */
	#hotkey = '';

	/**
	 * Active state
	 * @private
	 * @type {boolean}
	 */
	#enabled = true;

	/**
	 * @constructs Shortcut
	 * @param {Object|string} hotkey - Hotkey string or settings object
	 * @param {Element|string} [element] - Bind to element
	 * @param {Function} callback - function to trigger on hotkey
	 */
	constructor(hotkey, element, callback) {
		if (typeof hotkey === 'object') {
			element = hotkey.element;
			callback = hotkey.callback;
			hotkey = hotkey.hotkey;
		} else if (!callback) {
			callback = element;
		}

		this.callback = callback;
		this.element = element;
		this.hotkey = hotkey;

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	/**
	 * The hotkey string of the shortcut
	 * @name Shortcut#hotkey
	 * @type {string}
	 */
	get hotkey() {
		return this.#hotkey;
	}

	set hotkey(string) {
		this.data = parseHotkey(string);
		this.#hotkey = string;
	}

	/**
	 * Gets enabled state.
	 * @name Shortcut#enabled
	 * @type {boolean}
	 * @readonly
	 */
	get enabled() {
		return this.#enabled;
	}

	/**
	 * Toggle the enabled state of the shortcut
	 * @name Shortcut#toggle
	 * @param {boolean} [condition] - Force a toggle state
	 */
	toggle(condition) {
		this.#enabled = typeof condition !== 'undefined' ? condition : !this.#enabled;
	}

	/**
	 * Sets enabled to true, shorthand for Shortcut#toggle(true)
	 * @name Shortcut#enable
	 */
	enable() {
		this.toggle(true);
	}

	/**
	 * Sets enabled to false, shorthand for Shortcut#toggle(false)
	 * @name Shortcut#disable
	 */
	disable() {
		this.toggle(false);
	}

	/**
	 * Abstraction of check for the purpose of binding and unbinding listeners
	 * @private
	 * @alias check
	 * @param e
	 */
	handleKeyPress(e) {
		this.check(e);
	}

	/**
	 * Compares keyboard event with Shortcut data
	 * @name Shortcut#check
	 * @param {KeyboardEvent} e
	 */
	check(e) {
		const elem = this.element;
		if (elem) {
			if (elem instanceof Element) {
				if (e.target !== elem) {
					return;
				}
			} else if (!(e.target && e.target.matches && e.target.matches(elem))) {
				return;
			}
		}

		if (this.enabled && objectSearch(e, this.data.keyEvent)) {
			if (this.data.preventDefault) e.preventDefault();
			this.callback();
		}
	}

	/**
	 * Bind the event listener
	 * @name Shortcut#bind
	 */
	bind() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	/**
	 * Unbind the event listener
	 * @name Shortcut#unbind
	 */
	unbind() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	/**
	 * Parses a hotkey string into a KeyEvent object
	 * @alias parseHotkey
	 * @name Shortcut.parse
	 * @public
	 */
	static parse = parseHotkey;
}
