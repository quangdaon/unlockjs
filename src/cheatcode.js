import { keyMap, stringKeyMap } from './utils/maps';
import { Require } from './utils/errors';
import debug from 'debug';

const log = debug('unlock:cheatcode');

export default class CheatCode {
	@Private
	_callback = null;

	@Private
	_code = [];

	constructor(xname, code, callback) {
		if (typeof xname === 'object') {
			const { name, code, callback } = xname;
			Object.assign(this, { name, code, callback });
		} else {
			Object.assign(this, { name: xname, code, callback });
		}

		log('CheatCode created: %s', this.name);
	}

	set code(v) {
		this._code = v;
	}

	get code() {
		const codeArray = (typeof this._code === 'string') ? this._code.split('') : this._code;

		return codeArray
			.map(x => stringKeyMap[x] || x)
			.map(item => {
				if (!keyMap[item.toLowerCase()]) throw new Error(`Unrecognized key: ${item}`);
				return keyMap[item.toLowerCase()];
			});
	}

	set callback(v) {
		Require(v, 'CheatCode#callback').toBe(['function']);
		this._callback = v;
	}

	get callback() {
		return this._callback;
	}

	toJSON() {
		return {
			name: this.name,
			code: this.code
		};
	}

	toString() {
		return this.name;
	}

	valueOf() {
		return {
			name: this.name,
			callback: this.callback,
			code: this.code
		};
	}
}