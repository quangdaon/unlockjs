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

	@Private
	_hotkey = '';

	@Private
	_enabled = true;

	constructor(xhotkey, callback) {
		if (typeof xhotkey === 'object') {
			const { hotkey, callback } = xhotkey;
			Object.assign(this, { hotkey, callback });
		} else {
			Object.assign(this, { hotkey: xhotkey, callback });
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	get hotkey() {
		return this._hotkey;
	}

	set hotkey(v) {
		this.data = parseHotkey(v);
		this._hotkey = v;
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

	handleKeyPress(e) {
		this.check(e);
	}

	check(e) {
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