import { keyMap, stringKeyMap } from './utils/maps';
import { Require } from './utils/errors';
import debug from 'debug';
import { arraysMatch } from './utils/helpers';

const log = debug('unlock:cheatcode');

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

export default class CheatCode {
	@Private
	_callback = null;

	@Private
	_code = [];

	timeout = 500;

	@Private
	keyslist = [];

	@Private
	keyTimer = null;

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
		this._code = compileCode(v);
	}

	get code() {
		return this._code;
	}

	set callback(v) {
		Require(v, 'CheatCode#callback').toBe(['function']);
		this._callback = v;
	}

	get callback() {
		return this._callback;
	}

	@Private
	handleKeyPress(e) {
		this.keyslist.push(e.keyCode);

		clearTimeout(this.keyTimer);
		this.keyTimer = setTimeout(() => {
			this.reset();
		}, this.timeout);

		if (arraysMatch(this.code, this.keyslist)) {
			this.callback();
		}
	}

	bind() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	unbind() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	reset() {
		this.keyslist.length = 0;
	}

	static compile(v) {
		return compileCode(v);
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