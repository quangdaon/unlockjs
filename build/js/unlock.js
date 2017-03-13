'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
	if (typeof window === 'undefined') console.log('Please be aware that this library is intended for use in the browser.');

	if (typeof define === 'function' && define.amd) {
		define(['Unlock'], factory);
	} else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.Unlock = factory();
	}
})(typeof window !== 'undefined' ? window : undefined, function () {

	var keyMap = function () {
		var keys = {
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

		var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		for (var i = 0; i < alph.length; i++) {
			keys[alph[i]] = i + 97;
		}

		for (var j = 0; j <= 9; j++) {
			keys[j] = j + 48;
		}

		for (var k = 0; k <= 9; k++) {
			keys['pad' + k] = k + 96;
		}

		return keys;
	}();

	var stringKeyMap = {
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

	function arraysMatch(firstArr, secondArr) {
		if (firstArr.length !== secondArr.length) return false;
		for (var i = 0, len = firstArr.length; i < len; i++) {
			if (firstArr[i] !== secondArr[i]) {
				return false;
			}
		}
		return true;
	}

	var defineNewProperty = function defineNewProperty(target) {
		return function (prop, val, desc) {
			var descriptor = {
				enumerable: false,
				configurable: false
			};

			if (!val.get && !val.set) {
				descriptor.writable = typeof val !== 'function' || desc;
				descriptor.value = val;
			} else {
				desc = val;
			}

			_extends(descriptor, desc);

			Object.defineProperty(target, prop, descriptor);
		};
	};

	function Cheat(_ref) {
		var _this2 = this;

		var name = _ref.name,
		    callback = _ref.callback,
		    code = _ref.code,
		    enabled = _ref.enabled;

		var def = defineNewProperty(this);

		def('name', name, {
			writable: false
		});

		def('callback', {
			set: function set(val) {
				if (typeof val === 'function') {
					callback = val;
				} else {
					throw new Error('Invalid callback. Expected a function, got ' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)));
				}
			},
			get: function get() {
				return callback;
			}
		});

		def('code', {
			set: function set(val) {
				if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'string') {
					code = val;
				} else {
					throw new Error('Invalid callback. Expected an array or string, got ' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)));
				}
			},
			get: function get() {
				var codeArray = typeof code === 'string' ? code.split('') : code;

				return codeArray.map(function (x) {
					return stringKeyMap[x] || x;
				}).map(function (item) {
					if (!keyMap[item.toLowerCase()]) throw new Error('Unrecognized key: ' + item);
					return keyMap[item.toLowerCase()];
				});
			}
		});

		enabled = typeof enabled !== 'undefined' ? enabled : true;
		var dead = false;

		def('isEnabled', function () {
			return enabled;
		});
		def('enable', function () {
			return enabled = !dead && true;
		});
		def('disable', function () {
			return enabled = false;
		});
		def('toggle', function () {
			return enabled = !dead && !enabled;
		});
		def('trigger', function () {
			return enabled && _this2.callback();
		});

		def('kill', function () {
			dead = true;
			enabled = false;
		});

		this.set = function (set, val) {
			console.warn('Cheat.set() is deprecated. You can just set values using Cheat.property = value.');
			_this2[set] = val;
		};
	}

	function Hotkey(_ref2) {
		var trigger = _ref2.trigger,
		    callback = _ref2.callback,
		    selector = _ref2.selector,
		    enabled = _ref2.enabled;

		var def = defineNewProperty(this);

		var triggerRegex = /^(-)?([\^+!#]*)(.)$/;

		var element = void 0;

		def('trigger', {
			set: function set(val) {
				if (triggerRegex.test(val)) {
					trigger = val;
				} else {
					throw new Error('Invalid trigger. For more information, please refer to the docs.');
				}
			},
			get: function get() {
				return trigger;
			}
		});

		def('callback', {
			set: function set(val) {
				if (typeof val === 'function') {
					callback = val;
				} else {
					throw new Error('Invalid callback. Expected a function, got ' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)));
				}
			},
			get: function get() {
				return callback;
			}
		});

		def('selector', {
			set: function set(val) {
				if (element) element.removeEventListener('keypress', handler);
				if (val) {
					if (typeof val === 'string') {
						selector = val;
						element = document.querySelector(val);
					} else if (val.nodeType) {
						selector = val;
						element = val;
					} else {
						throw new Error('Invalid Selector. Expected an array or string, got ' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)) + '.');
					}
				} else {
					selector = val;
					element = document.body;
				}
				try {
					element.addEventListener('keypress', handler);
				} catch (e) {
					console.warn('Element Not Found.');
				}
			},
			get: function get() {
				return [selector, element];
			}
		});

		this.selector = selector;

		enabled = typeof enabled !== 'undefined' ? enabled : true;
		var dead = false;

		def('isEnabled', function () {
			return enabled;
		});
		def('enable', function () {
			return enabled = !dead && true;
		});
		def('disable', function () {
			return enabled = false;
		});
		def('toggle', function () {
			return enabled = !dead && !enabled;
		});

		def('kill', function () {
			dead = true;
			enabled = false;
		});

		function handler(event) {
			if (!enabled) return true;
			var keyEvents = {};
			var keyCode = void 0;

			if (window.event) {
				keyCode = window.event.keyCode;
			} else {
				keyCode = event.keyCode > 0 ? event.keyCode : event.which;
			}

			var metaMap = {
				'^': event.ctrlKey,
				'+': event.shiftKey,
				'!': event.altKey,
				'#': event.metaKey
			};

			var triggerArray = trigger.match(triggerRegex);

			var override = triggerArray[1],
			    metaKeys = triggerArray[2],
			    triggerKey = triggerArray[3];


			keyEvents.default = override === '-';
			keyEvents.meta = metaKeys.split('');
			keyEvents.trigger = triggerKey;

			var held = true;

			for (var char in metaMap) {
				if (keyEvents.meta.indexOf(char) > -1 !== metaMap[char]) {
					held = false;
					break;
				}
			}
			if (held && keyCode === keyMap[stringKeyMap[keyEvents.trigger] || keyEvents.trigger]) {
				if (keyEvents.default) event.preventDefault();
				callback();
				if (keyEvents.default) return false;
			}
		}
	}

	function Unlock(userSettings) {
		var _this3 = this;

		var def = defineNewProperty(this);

		var keys = {
			current: [],
			timer: null,
			cheatCodes: [],
			hotkeys: []
		};

		var enabled = true;

		var _this = this;

		var settings = _extends({
			delay: 500
		}, userSettings);

		function keyPress(event) {
			var keyCode = void 0;
			if (window.event) {
				keyCode = window.event.keyCode;
			} else {
				keyCode = event.keyCode > 0 ? event.keyCode : event.which;
			}

			clearTimeout(keys.timer);
			keys.current.push(keyCode);
			checkKeys();
			keys.timer = setTimeout(clrKeys, settings.delay);
		}

		function checkKeys() {
			keys.cheatCodes.forEach(function (cheat) {
				if (arraysMatch(keys.current, cheat.code)) {
					_this.trigger(cheat.name);
					clrKeys();
				}
			});
		}

		function clrKeys() {
			keys.current = [];
		}

		def('addCheat', function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var cheatCode = {
				name: '',
				code: '',
				callback: false
			};
			if (args.length === 1) {
				var cheatInput = args[0];
				if ((typeof cheatInput === 'undefined' ? 'undefined' : _typeof(cheatInput)) !== 'object') {
					throw new Error('Expected object, got ' + _typeof(args[0]));
				} else {
					cheatCode = cheatInput;
				}
			} else {
				for (var i = 0; i < args.length; i++) {
					switch (_typeof(args[i])) {
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

			if (_this3.find(cheatCode.name)) {
				throw new Error('Cheat already exists with name ' + cheatCode.name);
			} else if (!cheatCode.code || _typeof(cheatCode.code) !== 'object' && typeof cheatCode.code !== 'string') {
				throw new Error('Missing or invalid "code" property');
			} else if (!cheatCode.callback || typeof cheatCode.callback !== 'function') {
				throw new Error('Missing or invalid cheat code function');
			} else if (!cheatCode.name || typeof cheatCode.name !== 'string') {
				throw new Error('Invalid name');
			} else {
				cheatCode = new Cheat(cheatCode);
				keys.cheatCodes.push(cheatCode);
			}
			return cheatCode;
		});

		def('addHotkey', function () {
			var hotkey = {
				trigger: '',
				selector: '',
				callback: false
			};

			switch (arguments.length) {
				case 1:
					if (_typeof(arguments.length <= 0 ? undefined : arguments[0]) !== 'object') {
						throw new Error('Expected object, got ' + _typeof(arguments.length <= 0 ? undefined : arguments[0]));
					} else {
						_extends(hotkey, arguments.length <= 0 ? undefined : arguments[0]);
					}
					break;
				case 2:
					hotkey.trigger = arguments.length <= 0 ? undefined : arguments[0];
					hotkey.callback = arguments.length <= 1 ? undefined : arguments[1];
					break;
				default:
					hotkey.trigger = arguments.length <= 0 ? undefined : arguments[0];
					hotkey.selector = arguments.length <= 1 ? undefined : arguments[1];
					hotkey.callback = arguments.length <= 2 ? undefined : arguments[2];
					break;
			}

			if (typeof hotkey.trigger !== 'string') {
				throw new Error('Missing or invalid trigger');
			} else if (!/^(-)?([\^+!#]*)(.)$/.test(hotkey.trigger)) {
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

		def('settings', function (newSettings) {
			return _extends(settings, newSettings);
		});

		def('find', function (name) {
			return keys.cheatCodes.filter(function (x) {
				return x.name === name;
			})[0];
		});

		def('reset', function () {
			keys.cheatCodes.forEach(function (a) {
				return a.kill();
			});
			keys.cheatCodes.length = 0;
			keys.hotkeys.forEach(function (a) {
				return a.kill();
			});
			keys.hotkeys.length = 0;
		});

		def('enable', function (name) {
			if (name) {
				var cheat = _this3.find(name);
				cheat.enable();
			} else {
				enabled = true;
			}
		});

		def('disable', function (name) {
			if (name) {
				var cheat = _this3.find(name);
				cheat.disable();
			} else {
				enabled = false;
			}
		});

		def('toggle', function (name) {
			if (name) {
				var cheat = _this3.find(name);
				cheat.toggle();
			} else {
				enabled = !enabled;
			}
		});

		def('trigger', function (name) {
			var cheat = _this3.find(name);

			if (enabled) cheat.trigger();
		});

		document.addEventListener('keypress', keyPress);

		this._data = {
			keyMap: keyMap,
			arraysMatch: arraysMatch
		};
	}

	return Unlock;
});