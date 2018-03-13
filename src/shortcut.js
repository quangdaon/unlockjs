import { keyMap, metaMap, stringKeyMap } from './utils/maps';
import { validate } from './utils/errors';
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
	_trigger = '';

	@Private
	_enabled = true;

	constructor(xtrigger, callback) {
		if (typeof xtrigger === 'object') {
			const { trigger, callback } = xtrigger;
			Object.assign(this, { trigger, callback });
		} else {
			Object.assign(this, { trigger: xtrigger, callback });
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	get trigger() {
		return this._trigger;
	}

	set trigger(v) {
		validate(v)
			.as('Shortcut.trigger')
			.required()
			.type('string');

		this.data = parseHotkey(v);
		this._trigger = v;
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
		if(this.data.preventDefault) e.preventDefault();
		this.check(e);
	}

	check(data) {
		if (this.enabled && objectSearch(data, this.data.keyEvent)) {
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