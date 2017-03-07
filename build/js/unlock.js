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
			keys[alph[i]] = i + 65;
		}

		for (var j = 0; j <= 9; j++) {
			keys[j] = j + 48;
		}

		for (var k = 0; k <= 9; k++) {
			keys['pad' + k] = k + 96;
		}

		return keys;
	}();

	function arraysMatch(arr1, arr2) {
		if (arr1.length !== arr2.length) return false;
		for (var i = 0, len = arr1.length; i < len; i++) {
			if (arr1[i] !== arr2[i]) {
				return false;
			}
		}
		return true;
	}

	function Cheat(data) {
		var _this2 = this;

		this.name = data.name;
		this.callback = data.callback;

		var dead = false;

		var rawCode = data.code;

		var enabled = typeof data.enabled !== 'undefined' ? data.enabled : true;

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

		this.code = function () {
			var codeArray = typeof rawCode === 'string' ? rawCode.split('') : rawCode;

			return codeArray.map(function (x) {
				return stringKeyMap[x] || x;
			}).map(function (item) {
				if (!keyMap[item.toLowerCase()]) throw new Error('Unrecognized key: ' + item);
				return keyMap[item.toLowerCase()];
			});
		};

		this.isEnabled = function () {
			return enabled;
		};
		this.enable = function () {
			return enabled = !dead && true;
		};
		this.disable = function () {
			return enabled = false;
		};
		this.toggle = function () {
			return enabled = !dead && !enabled;
		};
		this.trigger = function () {
			return enabled && _this2.callback();
		};

		this.kill = function () {
			dead = true;
			enabled = false;
		};

		this.set = function (set, val) {
			switch (set) {
				case 'name':
					throw new Error('Name cannot be changed');
				case 'callback':
					if (typeof val === 'function') {
						_this2.callback = val;
					} else {
						throw new Error('Invalid callback. Expected a function, got ' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)));
					}
					break;
				case 'code':
					if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'string') {
						rawCode = val;
					} else {
						throw new Error('Invalid callback. Expected an array or string, got ' + (typeof val === 'undefined' ? 'undefined' : _typeof(val)));
					}
					break;
				default:
					throw new Error('Invalid Setting');
			}
		};
	}

	function Unlock(userSettings) {
		var keys = {
			current: [],
			timer: null,
			cheatCodes: [],
			hotKey: []
		};

		var enabled = true;

		var _this = this;

		var settings = _extends({
			delay: 500
		}, userSettings);

		function keyPress(keyCode) {
			clearTimeout(keys.timer);
			keys.current.push(keyCode);
			checkKeys();
			keys.timer = setTimeout(clrKeys, settings.delay);
		}

		function checkKeys() {
			for (var i = keys.cheatCodes.length - 1; i >= 0; i--) {
				if (arraysMatch(keys.current, keys.cheatCodes[i].code())) {
					_this.trigger(keys.cheatCodes[i].name);
					clrKeys();
				}
			}
		}

		function clrKeys() {
			keys.current = [];
		}

		this.addCheat = function () {
			var cheatCode = {
				name: '',
				code: '',
				callback: false
			};
			if (arguments.length === 1) {
				var cheatInput = arguments[0];
				if ((typeof cheatCode === 'undefined' ? 'undefined' : _typeof(cheatCode)) !== 'object') {
					throw new Error('Expected object, got ' + _typeof(arguments[0]));
				} else {
					cheatCode = cheatInput;
				}
			} else {
				for (var i = 0; i < arguments.length; i++) {
					switch (_typeof(arguments[i])) {
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
			return this.find(cheatCode.name);
		};

		this.settings = function (newSettings) {
			_extends(settings, newSettings);
		};

		this.find = function (name) {
			return keys.cheatCodes.filter(function (x) {
				return x.name === name;
			})[0];
		};

		this.reset = function () {
			keys.cheatCodes.forEach(function (a) {
				return a.kill();
			});
			keys.cheatCodes.length = 0;
		};

		this.enable = function (name) {
			if (name) {
				var cheat = this.find(name);
				cheat.enable();
			} else {
				enabled = true;
			}
		};

		this.disable = function (name) {
			if (name) {
				var cheat = this.find(name);
				cheat.disable();
			} else {
				enabled = false;
			}
		};

		this.toggle = function (name) {
			if (name) {
				var cheat = this.find(name);
				cheat.toggle();
			} else {
				enabled = !enabled;
			}
		};

		this.trigger = function (name) {
			var cheat = this.find(name);

			if (enabled) cheat.trigger();
		};

		document.addEventListener('keydown', function (event) {
			var holder = void 0;
			if (window.event) {
				holder = window.event.keyCode;
			} else {
				holder = event.which;
			}
			keyPress(holder);
		});

		this._data = {
			keyMap: keyMap,
			arraysMatch: arraysMatch
		};
	}

	return Unlock;
});