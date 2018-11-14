import { keyMap, metaMap, stringKeyMap } from './utils/maps';
import { objectSearch } from './utils/helpers';

const triggerRegex = /^(-)?([\^+!#]*)(.)$/;

function parseHotkey(v) {
	const match = v.match(triggerRegex);
	if (!match) throw new Error('Invalid Hotkey: ' + v);

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
	data = {};

	#hotkey = '';

	#enabled = true;

	constructor(xhotkey, xelem, callback) {
		if (typeof xhotkey === 'object') {
			const { hotkey, callback, element } = xhotkey;
			Object.assign(this, { hotkey, callback, element });
		} else {
			const data = { hotkey: xhotkey, callback };

			if (!data.callback) {
				data.callback = xelem;
			} else {
				data.element = xelem;
			}

			Object.assign(this, data);
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	get hotkey() {
		return this.#hotkey;
	}

	set hotkey(v) {
		this.data = parseHotkey(v);
		this.#hotkey = v;
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

	handleKeyPress(e) {
		this.check(e);
	}

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

	bind() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	unbind() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	static parse = parseHotkey;
}
