import { keyMap, stringKeyMap } from './utils/maps';
import { arraysMatch } from './utils/helpers';

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
	#callback = null;

	#code = [];

	#keyslist = [];

	#keyTimer = null;

	#enabled = true;

	timeout = 500;

	constructor(xname, code, callback) {
		if (typeof xname === 'object') {
			const { name, code, callback } = xname;
			Object.assign(this, { name, code, callback });
		} else {
			Object.assign(this, { name: xname, code, callback });
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	set code(v) {
		this.#code = compileCode(v);
	}

	get code() {
		return this.#code;
	}

	set callback(v) {
		this.#callback = v;
	}

	get callback() {
		return this.#callback;
	}

	get enabled() {
		return this.#enabled;
	}

	check(keys) {
		if (this.enabled && arraysMatch(this.code, keys)) {
			this.callback();
			return true;
		}
		return false;
	}

	handleKeyPress(e) {
		this.#keyslist.push(e.keyCode);

		this.check(this.#keyslist);

		clearTimeout(this.#keyTimer);
		this.#keyTimer = setTimeout(() => {
			this.reset();
		}, this.timeout);
	}

	bind() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	unbind() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	reset() {
		this.#keyslist.length = 0;
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
