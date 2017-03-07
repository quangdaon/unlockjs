(function (root, factory) {
	if (typeof window === 'undefined') console.log('Please be aware that this library is intended for use in the browser.');

	if (typeof define === 'function' && define.amd) {
		define(['Unlock'], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.Unlock = factory();
	}
})(typeof window !== 'undefined' ? window : this, function () {

	const keyMap = (function () {
		const keys = {
			tab: 9,
			up: 38,
			down: 40,
			left: 37,
			right: 39,
			enter: 13,
			space: 32,
			' ': 32,
			shift: 16,
			ctrl: 17,
			alt: 18,
			win: 91,
			backspace: 8,
			capsLock: 20,
			',': 188,
			'.': 190,
			'/': 191,
			'\\': 220,
			esc: 27
		};

		const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		for (let i = 0; i < alph.length; i++) {
			keys[alph[i]] = i + 65;
		}

		for (let j = 0; j <= 9; j++) {
			keys[j] = j + 48;
		}

		for (let k = 0; k <= 9; k++) {
			keys[`pad${k}`] = k + 96;
		}

		return keys;
	})();

	const stringKeyMap = {
		U: 'up',
		D: 'down',
		L: 'left',
		R: 'right',
		X: 'esc',
		'_': 'tab',
		'^': 'ctrl',
		'+': 'shift',
		'!': 'alt',
		'#': 'win',
		'<': 'backspace',
		'>': 'enter'
	};

	function arraysMatch(arr1, arr2) { //Checks if Array Match - Not My Script
		if (arr1.length !== arr2.length) return false; //If Array Lengths Don't Match, Return False
		for (let i = 0, len = arr1.length; i < len; i++) { //Cycle Through Array Contents
			if (arr1[i] !== arr2[i]) { //Checks if Content in Location Match
				return false; //If They Don't Match, Return False
			}
		}
		return true; //If Nothing Doesn't Match, Everything Matches; Therefore, Arrays Match
	}

	/*** Private single cheat factory ***/
	function Cheat(data) {

		/*** Todo: Make properties readonly ***/
		this.name = data.name;
		this.callback = data.callback;

		let dead = false;

		let rawCode = data.code;

		let enabled = (typeof data.enabled !== 'undefined') ? data.enabled : true;

		this.code = () => {
			var codeArray = (typeof rawCode === 'string') ? rawCode.split('') : rawCode;

			return codeArray.map(x => stringKeyMap[x] || x).map(item => {
				if (!keyMap[item.toLowerCase()]) throw new Error(`Unrecognized key: ${item}`);
				return keyMap[item.toLowerCase()];
			});
		};

		this.isEnabled = () => enabled;
		this.enable = () => enabled = !dead && true;
		this.disable = () => enabled = false;
		this.toggle = () => enabled = !dead && !enabled;
		this.trigger = () => enabled && this.callback();

		this.kill = () => {
			dead = true;
			enabled = false;
		};

		this.set = (set, val) => {
			switch (set) {
			case 'name':
				throw new Error('Name cannot be changed');
			case 'callback':
				if (typeof val === 'function') {
					this.callback = val;
				} else {
					throw new Error(`Invalid callback. Expected a function, got ${typeof val}`);
				}
				break;
			case 'code':
				if (typeof val === 'object' || typeof val === 'string') {
					rawCode = val;
				} else {
					throw new Error(`Invalid callback. Expected an array or string, got ${typeof val}`);
				}
				break;
			default:
				throw new Error('Invalid Setting');
			}
		};
	}

	/*** Private Hotkey ***/
	function Hotkey(settings) {
		const triggerRegex = /^(-)?([\^+!#]*)([\w\d])$/;

		this.trigger = settings.trigger;

		this.callback = settings.callback;

		this.selector = settings.selector;

		const handler = event => {
			const keyEvents = {};

			if (window.event) { //Browser Compatibility Thingy
				keyEvents.code = window.event.keyCode;
			} else {
				keyEvents.code = event.which;
			}

			const metaMap = {
				'^': event.ctrlKey,
				'+': event.shiftKey,
				'!': event.altKey,
				'#': event.metaKey
			};

			var triggerArray = this.trigger.match(triggerRegex);

			const {
				1: override,
				2: metaKeys,
				3: triggerKey
			} = triggerArray;

			keyEvents.default = override === '-';
			keyEvents.meta = metaKeys.split('');
			keyEvents.trigger = triggerKey;

			const held = keyEvents.meta.reduce((state, next) => state && metaMap[next], true);

			if (held && keyEvents.code === keyMap[stringKeyMap[keyEvents.trigger] || keyEvents.trigger]) {
				if(keyEvents.default) event.preventDefault();
				this.callback();
				if(keyEvents.default) return false;
			}
		};

		const element = this.selector ? document.querySelector(this.selector) : document.body;

		element.addEventListener('keypress', handler);
	}

	function Unlock(userSettings) {
		const keys = {
			current: [],
			timer: null,
			cheatCodes: [],
			hotKeys: []
		};

		let enabled = true;

		const _this = this;

		const settings = Object.assign({
			delay: 500
		}, userSettings);

		function keyPress(event) { //Record Key Pressed
			let keyCode;
			if (window.event) { //Browser Compatibility Thingy
				keyCode = window.event.keyCode;
			} else {
				keyCode = event.which;
			}

			clearTimeout(keys.timer); //Clears Timer
			keys.current.push(keyCode); //Add Key Pressed to Array
			checkKeys(); //Go to checkKeys() Function
			keys.timer = setTimeout(clrKeys, settings.delay); //Reset Key Timer for Half a Second
		}

		function checkKeys() {
			keys.cheatCodes.forEach(cheat => {
				if (arraysMatch(keys.current, cheat.code())) {
					_this.trigger(cheat.name);
					clrKeys();
				}
			});
			// for (let i = keys.cheatCodes.length - 1; i >= 0; i--) {
			// }
		}

		function clrKeys() {
			keys.current = [];
		}

		this.addCheat = function () {
			let cheatCode = {
				name: '',
				code: '',
				callback: false
			};
			if (arguments.length === 1) {
				const cheatInput = arguments[0];
				if (typeof (cheatInput) !== 'object') {
					throw new Error(`Expected object, got ${typeof (arguments[0])}`);
				} else {
					cheatCode = cheatInput;
				}
			} else {
				for (let i = 0; i < arguments.length; i++) {
					switch (typeof (arguments[i])) {
					case 'string':
						cheatCode.name = cheatCode.name || arguments[i];
						break;
					case 'object':
						cheatCode.code = cheatCode.code || arguments[i];
						break;
					case 'function':
						cheatCode.callback = cheatCode.callback || arguments[i];
						break;
					}
				}
			}

			if (this.find(cheatCode.name)) {
				throw new Error(`Cheat already exists with name ${cheatCode.name}`);
			} else if (!cheatCode.code || typeof (cheatCode.code) !== 'object' && typeof (cheatCode.code) !== 'string') {
				throw new Error('Missing or invalid "code" property');
			} else if (!cheatCode.callback || typeof (cheatCode.callback) !== 'function') {
				throw new Error('Missing or invalid cheat code function');
			} else if (!cheatCode.name || typeof (cheatCode.name) !== 'string') {
				throw new Error('Invalid name');
			} else {
				cheatCode = new Cheat(cheatCode);
				keys.cheatCodes.push(cheatCode);
			}
			return cheatCode;
		};

		this.addHotkey = function (...args) {
			let hotkey = {
				trigger: '',
				selector: '',
				callback: false
			};

			switch (args.length) {
			case 1:
				if (typeof args[0] !== 'object') {
					throw new Error(`Expected object, got ${typeof (arguments[0])}`);
				} else {
					Object.assign(hotkey, args[0]);
				}
				break;
			case 2:
				hotkey.trigger = args[0];
				hotkey.callback = args[1];
				break;
			default:
				hotkey.trigger = args[0];
				hotkey.selector = args[1];
				hotkey.callback = args[2];
				break;
			}

			if (typeof hotkey.trigger !== 'string') {
				throw new Error('Missing or invalid trigger');
			} else if (hotkey.selector && typeof hotkey.selector !== 'string') {
				throw new Error('Invalid selector');
			} else if (!hotkey.callback || typeof hotkey.callback !== 'function') {
				throw new Error('Missing or invalid callback');
			} else {
				hotkey = new Hotkey(hotkey);
				keys.hotKeys.push(hotkey);
			}
			return hotkey;
		};

		this.settings = newSettings => {
			Object.assign(settings, newSettings);
		};

		this.find = name => keys.cheatCodes.filter(x => x.name === name)[0];

		this.reset = () => {
			keys.cheatCodes.forEach(a => a.kill());
			keys.cheatCodes.length = 0;
		};

		this.enable = function (name) {
			if (name) {
				const cheat = this.find(name);
				cheat.enable();
			} else {
				enabled = true;
			}
		};

		this.disable = function (name) {
			if (name) {
				const cheat = this.find(name);
				cheat.disable();
			} else {
				enabled = false;
			}
		};

		this.toggle = function (name) {
			if (name) {
				const cheat = this.find(name);
				cheat.toggle();
			} else {
				enabled = !enabled;
			}
		};

		this.trigger = function (name) {
			const cheat = this.find(name);

			if (enabled) cheat.trigger();
		};

		document.addEventListener('keydown', keyPress);

		/* dev: */
		/*** Passes private stuff for tests. ***/
		this._data = {
			keyMap,
			arraysMatch
		};
		/* end-dev */
	}

	return Unlock;
});