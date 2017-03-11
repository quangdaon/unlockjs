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
			keys[alph[i]] = i + 97;
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

	function arraysMatch(firstArr, secondArr) { //Checks if Array Match - Not My Script
		if (firstArr.length !== secondArr.length) return false; //If Array Lengths Don't Match, Return False
		for (let i = 0, len = firstArr.length; i < len; i++) { //Cycle Through Array Contents
			if (firstArr[i] !== secondArr[i]) { //Checks if Content in Location Match
				return false; //If They Don't Match, Return False
			}
		}
		return true; //If Nothing Doesn't Match, Everything Matches; Therefore, Arrays Match
	}

	const defineNewProperty = (target) => {
		return (prop, val, desc) => {
			const descriptor = {
				enumerable: false,
				configurable: false,
			};

			if (!val.get && !val.set) {
				descriptor.writable = typeof val !== 'function' || desc;
				descriptor.value = val;
			} else {
				desc = val;
			}

			Object.assign(descriptor, desc);

			Object.defineProperty(target, prop, descriptor);
		};
	};

	/*** Private single cheat factory ***/
	function Cheat({
		name,
		callback,
		code,
		enabled
	}) {
		const def = defineNewProperty(this);

		def('name', name, {
			writable: false
		});

		def('callback', {
			set: (val) => {
				if (typeof val === 'function') {
					callback = val;
				} else {
					throw new Error(`Invalid callback. Expected a function, got ${typeof val}`);
				}
			},
			get: () => callback
		});

		def('code', {
			set: (val) => {
				if (typeof val === 'object' || typeof val === 'string') {
					code = val;
				} else {
					throw new Error(`Invalid callback. Expected an array or string, got ${typeof val}`);
				}
			},
			get: () => {
				const codeArray = (typeof code === 'string') ? code.split('') : code;

				return codeArray.map(x => stringKeyMap[x] || x).map(item => {
					if (!keyMap[item.toLowerCase()]) throw new Error(`Unrecognized key: ${item}`);
					return keyMap[item.toLowerCase()];
				});
			}
		});

		// Object.defineProperty(this, '')

		enabled = (typeof enabled !== 'undefined') ? enabled : true;
		let dead = false;

		def('isEnabled', () => enabled);
		def('enable', () => enabled = !dead && true);
		def('disable', () => enabled = false);
		def('toggle', () => enabled = !dead && !enabled);
		def('trigger', () => enabled && this.callback());

		def('kill', () => {
			dead = true;
			enabled = false;
		});

		this.set = (set, val) => {
			console.warn('Cheat.set() is deprecated. You can just set values using Cheat.property = value.');
			this[set] = val;
		};
	}

	/*** Private Hotkey ***/
	function Hotkey({
		trigger,
		callback,
		selector,
		enabled
	}) {
		const def = defineNewProperty(this);

		const triggerRegex = /^(-)?([\^+!#]*)([\w\d])$/;

		let element;

		// console.log(trigger);

		def('trigger', {
			set: val => {
				if (triggerRegex.test(val)) {
					trigger = val;
				} else {
					throw new Error('Invalid trigger. For more information, please refer to the docs.');
				}
			},
			get: () => trigger
		});

		def('callback', {
			set: (val) => {
				if (typeof val === 'function') {
					callback = val;
				} else {
					throw new Error(`Invalid callback. Expected a function, got ${typeof val}`);
				}
			},
			get: () => callback
		});

		def('selector', {
			set: val => {
				if (element) element.removeEventListener('keypress', handler);
				// console.log(element);
				if (val) {
					if (typeof val === 'string') {
						selector = val;
						element = document.querySelector(val);
					} else if (val.nodeType) {
						selector = val;
						element = val;
					} else {
						throw new Error(`Invalid Selector. Expected an array or string, got ${typeof val}.`);
					}
				} else {
					selector = val;
					element = document.body;
				}
				// console.log(element);
				try {
					element.addEventListener('keypress', handler);
				} catch (e) {
					console.warn('Element Not Found.');
				}
			},
			get: () => [selector, element]
		});

		this.selector = selector;

		enabled = (typeof enabled !== 'undefined') ? enabled : true;
		let dead = false;

		def('isEnabled', () => enabled);
		def('enable', () => enabled = !dead && true);
		def('disable', () => enabled = false);
		def('toggle', () => enabled = !dead && !enabled);

		def('kill', () => {
			dead = true;
			enabled = false;
		});

		function handler(event) {
			if (!enabled) return true;
			const keyEvents = {};
			let keyCode;

			if (window.event) { //Browser Compatibility Thingy
				keyCode = window.event.keyCode;
			} else {
				keyCode = event.keyCode > 0 ? event.keyCode : event.which;
			}

			const metaMap = {
				'^': event.ctrlKey,
				'+': event.shiftKey,
				'!': event.altKey,
				'#': event.metaKey
			};

			const triggerArray = trigger.match(triggerRegex);

			const {
				1: override,
				2: metaKeys,
				3: triggerKey
			} = triggerArray;

			keyEvents.default = override === '-';
			keyEvents.meta = metaKeys.split('');
			keyEvents.trigger = triggerKey;

			let held = true;

			for (let char in metaMap) {
				if (keyEvents.meta.indexOf(char) > -1 !== metaMap[char]) {
					held = false;
					break;
				}
			}
			// TODO - Add support for multiple trigger keys (i.e. Ctrl+A+F)
			if (held && keyCode === keyMap[stringKeyMap[keyEvents.trigger] || keyEvents.trigger]) {
				if (keyEvents.default) event.preventDefault();
				callback();
				if (keyEvents.default) return false;
			}
		}
	}

	function Unlock(userSettings) {
		const def = defineNewProperty(this);

		const keys = {
			current: [],
			timer: null,
			cheatCodes: [],
			hotkeys: []
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
				keyCode = event.keyCode > 0 ? event.keyCode : event.which;
			}

			// console.log(keyCode);

			clearTimeout(keys.timer); //Clears Timer
			keys.current.push(keyCode); //Add Key Pressed to Array
			checkKeys(); //Go to checkKeys() Function
			keys.timer = setTimeout(clrKeys, settings.delay); //Reset Key Timer for Half a Second
		}

		function checkKeys() {
			keys.cheatCodes.forEach(cheat => {
				if (arraysMatch(keys.current, cheat.code)) {
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

		def('addCheat', (...args) => {
			let cheatCode = {
				name: '',
				code: '',
				callback: false
			};
			if (args.length === 1) {
				const cheatInput = args[0];
				if (typeof (cheatInput) !== 'object') {
					throw new Error(`Expected object, got ${typeof (args[0])}`);
				} else {
					cheatCode = cheatInput;
				}
			} else {
				for (let i = 0; i < args.length; i++) {
					switch (typeof (args[i])) {
					case 'string':
						cheatCode.name = cheatCode.name || args[i];
						break;
					case 'object':
						cheatCode.code = cheatCode.code || args[i];
						break;
					case 'function':
						cheatCode.callback = cheatCode.callback || args[i];
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
		});

		def('addHotkey', (...args) => {
			let hotkey = {
				trigger: '',
				selector: '',
				callback: false
			};

			switch (args.length) {
			case 1:
				if (typeof args[0] !== 'object') {
					throw new Error(`Expected object, got ${typeof (args[0])}`);
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
			} else if (!/^(-)?([\^+!#]*)([\w\d])$/.test(hotkey.trigger)) {
				throw new Error('Invalid trigger. Please refer to docs');
			} else if (hotkey.selector && typeof hotkey.selector !== 'string') {
				throw new Error('Invalid selector');
			} else if (!hotkey.callback || typeof hotkey.callback !== 'function') {
				throw new Error('Missing or invalid callback');
			} else {
				hotkey = new Hotkey(hotkey);
				keys.hotkeys.push(hotkey);
			}
			return hotkey;
		});

		def('settings', newSettings => Object.assign(settings, newSettings));

		def('find', name => keys.cheatCodes.filter(x => x.name === name)[0]);

		def('reset', () => {
			keys.cheatCodes.forEach(a => a.kill());
			keys.cheatCodes.length = 0;
			keys.hotkeys.forEach(a => a.kill());
			keys.hotkeys.length = 0;
		});

		def('enable', name => {
			if (name) {
				const cheat = this.find(name);
				cheat.enable();
			} else {
				enabled = true;
			}
		});

		def('disable', name => {
			if (name) {
				const cheat = this.find(name);
				cheat.disable();
			} else {
				enabled = false;
			}
		});

		def('toggle', name => {
			if (name) {
				const cheat = this.find(name);
				cheat.toggle();
			} else {
				enabled = !enabled;
			}
		});

		def('trigger', name => {
			const cheat = this.find(name);

			if (enabled) cheat.trigger();
		});

		document.addEventListener('keypress', keyPress);

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