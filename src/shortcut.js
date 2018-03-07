import { keyMap, metaMap, stringKeyMap } from './utils/maps';
import { validate } from './utils/errors';

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

	constructor(xtrigger, callback) {
		if (typeof xtrigger === 'object') {
			const { trigger, callback } = xtrigger;
			Object.assign(this, { trigger, callback });
		} else {
			Object.assign(this, { trigger: xtrigger, callback });
		}
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

	static parse = parseHotkey;
}