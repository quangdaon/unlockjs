(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Unlock", [], factory);
	else if(typeof exports === 'object')
		exports["Unlock"] = factory();
	else
		root["Unlock"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cheatcode.js":
/*!**************************!*\
  !*** ./src/cheatcode.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _maps = __webpack_require__(/*! ./utils/maps */ "./src/utils/maps.js");

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function compileCode(v) {
	var codeArray = typeof v === 'string' ? v.split('') : v;

	return codeArray.map(function (x) {
		return _maps.stringKeyMap[x] || x;
	}).map(function (item) {
		// Since cheatcodes rely on keydown instead of keypress, single letters should use the uppercase by default
		var result = _maps.keyMap[item.toUpperCase()] || _maps.keyMap[item.toLowerCase()];

		if (!result) throw new Error('Unrecognized key: ' + item);

		return result;
	});
}

var _callback = new WeakMap();

var _code = new WeakMap();

var _keyslist = new WeakMap();

var _keyTimer = new WeakMap();

var _enabled = new WeakMap();

var CheatCode = (_temp = _class = function () {
	function CheatCode(xname, code, callback) {
		_classCallCheck(this, CheatCode);

		this.timeout = 500;

		_callback.set(this, null);

		_code.set(this, []);

		_keyslist.set(this, []);

		_keyTimer.set(this, null);

		_enabled.set(this, true);

		if ((typeof xname === 'undefined' ? 'undefined' : _typeof(xname)) === 'object') {
			var name = xname.name,
			    _code2 = xname.code,
			    _callback2 = xname.callback;

			Object.assign(this, { name: name, code: _code2, callback: _callback2 });
		} else {
			Object.assign(this, { name: xname, code: code, callback: callback });
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	_createClass(CheatCode, [{
		key: 'check',
		value: function check(keys) {
			if (this.enabled && (0, _helpers.arraysMatch)(this.code, keys)) {
				this.callback();
				return true;
			}
			return false;
		}
	}, {
		key: 'handleKeyPress',
		value: function handleKeyPress(e) {
			var _this = this;

			_keyslist.get(this).push(e.keyCode);

			this.check(_keyslist.get(this));

			clearTimeout(_keyTimer.get(this));

			_keyTimer.set(this, setTimeout(function () {
				_this.reset();
			}, this.timeout));
		}
	}, {
		key: 'bind',
		value: function bind() {
			document.addEventListener('keydown', this.handleKeyPress);
		}
	}, {
		key: 'unbind',
		value: function unbind() {
			document.removeEventListener('keydown', this.handleKeyPress);
		}
	}, {
		key: 'reset',
		value: function reset() {
			_keyslist.get(this).length = 0;
		}
	}, {
		key: 'toggle',
		value: function toggle(condition) {
			_enabled.set(this, typeof condition !== 'undefined' ? condition : !_enabled.get(this));
		}
	}, {
		key: 'enable',
		value: function enable() {
			this.toggle(true);
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.toggle(false);
		}
	}, {
		key: 'toJSON',
		value: function toJSON() {
			return {
				name: this.name,
				code: this.code
			};
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.name;
		}
	}, {
		key: 'code',
		set: function set(v) {
			_code.set(this, compileCode(v));
		},
		get: function get() {
			return _code.get(this);
		}
	}, {
		key: 'callback',
		set: function set(v) {
			_callback.set(this, v);
		},
		get: function get() {
			return _callback.get(this);
		}
	}, {
		key: 'enabled',
		get: function get() {
			return _enabled.get(this);
		}
	}]);

	return CheatCode;
}(), _class.compile = compileCode, _temp);
exports.default = CheatCode;

/***/ }),

/***/ "./src/shortcut.js":
/*!*************************!*\
  !*** ./src/shortcut.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _maps = __webpack_require__(/*! ./utils/maps */ "./src/utils/maps.js");

var _helpers = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var triggerRegex = /^(-)?([\^+!#]*)(.)$/;

function parseHotkey(v) {
	var match = v.match(triggerRegex);
	if (!match) throw new Error('Invalid Hotkey: ' + v);

	var _match = _slicedToArray(match, 4),
	    prevent = _match[1],
	    meta = _match[2],
	    key = _match[3];

	var keyEvent = {};

	var keyName = _maps.stringKeyMap[key] || key;

	keyEvent.keyCode = _maps.keyMap[keyName.toUpperCase()] || _maps.keyMap[keyName.toLowerCase()];

	if (!keyEvent.keyCode) throw new Error('Invalid Key: ' + key);

	Object.keys(_maps.metaMap).forEach(function (metaName) {
		var metaKey = _maps.metaMap[metaName];
		keyEvent[metaName] = meta.indexOf(metaKey) > -1;
	});

	return { keyEvent: keyEvent, preventDefault: !!prevent };
}

var _hotkey = new WeakMap();

var _enabled = new WeakMap();

var Shortcut = (_temp = _class = function () {
	function Shortcut(xhotkey, xelem, callback) {
		_classCallCheck(this, Shortcut);

		this.data = {};

		_hotkey.set(this, '');

		_enabled.set(this, true);

		if ((typeof xhotkey === 'undefined' ? 'undefined' : _typeof(xhotkey)) === 'object') {
			var hotkey = xhotkey.hotkey,
			    _callback = xhotkey.callback,
			    element = xhotkey.element;

			Object.assign(this, { hotkey: hotkey, callback: _callback, element: element });
		} else {
			var data = { hotkey: xhotkey, callback: callback };

			if (!data.callback) {
				data.callback = xelem;
			} else {
				data.element = xelem;
			}

			Object.assign(this, data);
		}

		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	_createClass(Shortcut, [{
		key: 'toggle',
		value: function toggle(condition) {
			_enabled.set(this, typeof condition !== 'undefined' ? condition : !_enabled.get(this));
		}
	}, {
		key: 'enable',
		value: function enable() {
			this.toggle(true);
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.toggle(false);
		}
	}, {
		key: 'handleKeyPress',
		value: function handleKeyPress(e) {
			this.check(e);
		}
	}, {
		key: 'check',
		value: function check(e) {
			var elem = this.element;
			if (elem) {
				if (elem instanceof Element) {
					if (e.target !== elem) {
						return;
					}
				} else if (!(e.target && e.target.matches && e.target.matches(elem))) {
					return;
				}
			}

			if (this.enabled && (0, _helpers.objectSearch)(e, this.data.keyEvent)) {
				if (this.data.preventDefault) e.preventDefault();
				this.callback();
			}
		}
	}, {
		key: 'bind',
		value: function bind() {
			document.addEventListener('keydown', this.handleKeyPress);
		}
	}, {
		key: 'unbind',
		value: function unbind() {
			document.removeEventListener('keydown', this.handleKeyPress);
		}
	}, {
		key: 'hotkey',
		get: function get() {
			return _hotkey.get(this);
		},
		set: function set(v) {
			this.data = parseHotkey(v);

			_hotkey.set(this, v);
		}
	}, {
		key: 'enabled',
		get: function get() {
			return _enabled.get(this);
		}
	}]);

	return Shortcut;
}(), _class.parse = parseHotkey, _temp);
exports.default = Shortcut;

/***/ }),

/***/ "./src/unlock.js":
/*!***********************!*\
  !*** ./src/unlock.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _cheatcode = __webpack_require__(/*! ./cheatcode */ "./src/cheatcode.js");

var _cheatcode2 = _interopRequireDefault(_cheatcode);

var _shortcut = __webpack_require__(/*! ./shortcut */ "./src/shortcut.js");

var _shortcut2 = _interopRequireDefault(_shortcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _cheats = new WeakMap();

var _shortcuts = new WeakMap();

var _keyslist = new WeakMap();

var _enabled = new WeakMap();

var _bindListener = new WeakMap();

var Unlock = (_temp = _class = function () {
	function Unlock() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Unlock);

		_cheats.set(this, []);

		_shortcuts.set(this, []);

		_keyslist.set(this, []);

		_enabled.set(this, true);

		_bindListener.set(this, function () {
			var _this = this;

			var keyTimer = void 0;

			document.addEventListener('keydown', function (e) {
				if (!_this.enabled) return true;
				_keyslist.get(_this).push(e.which);

				clearTimeout(keyTimer);
				keyTimer = setTimeout(function () {
					_this.reset();
				}, _this.timeout);

				_cheats.get(_this).forEach(function (cheat) {
					var matched = cheat.check(_keyslist.get(_this));
					if (matched && _this.resetOnMatch) _this.reset();
				});

				_shortcuts.get(_this).forEach(function (shortcut) {
					shortcut.check(e);
				});
			});
		}.bind(this));

		var _options$timeout = options.timeout,
		    timeout = _options$timeout === undefined ? 500 : _options$timeout,
		    _options$resetOnMatch = options.resetOnMatch,
		    resetOnMatch = _options$resetOnMatch === undefined ? false : _options$resetOnMatch;


		this.timeout = timeout;

		Object.assign(this, {
			timeout: timeout,
			resetOnMatch: resetOnMatch
		});

		_bindListener.get(this)();
	}

	_createClass(Unlock, [{
		key: 'addCheat',
		value: function addCheat() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var name = typeof args[0] === 'string' ? args[0] : args.name;
			var foundCheat = this.find(name);
			if (foundCheat) {
				throw Error('A cheat has already been created with the name ' + foundCheat.name);
			}

			var cheatCode = new (Function.prototype.bind.apply(_cheatcode2.default, [null].concat(args)))();
			_cheats.get(this).push(cheatCode);

			return cheatCode;
		}
	}, {
		key: 'addShortcut',
		value: function addShortcut() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			var shortcut = new (Function.prototype.bind.apply(_shortcut2.default, [null].concat(args)))();
			_shortcuts.get(this).push(shortcut);

			return shortcut;
		}
	}, {
		key: 'find',
		value: function find(name) {
			return _cheats.get(this).find(function (e) {
				return e.name === name;
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			_keyslist.get(this).length = 0;
		}
	}, {
		key: 'toggle',
		value: function toggle(condition) {
			_enabled.set(this, typeof condition !== 'undefined' ? condition : !_enabled.get(this));
		}
	}, {
		key: 'enable',
		value: function enable() {
			this.toggle(true);
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.toggle(false);
		}
	}, {
		key: 'enabled',
		get: function get() {
			return _enabled.get(this);
		}
	}]);

	return Unlock;
}(), _class.CheatCode = _cheatcode2.default, _class.Shortcut = _shortcut2.default, _temp);
exports.default = Unlock;

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.arraysMatch = arraysMatch;
exports.objectSearch = objectSearch;
function arraysMatch(firstArr, secondArr) {
	//Checks if Array Match - Not My Script
	if (firstArr.length !== secondArr.length) return false; //If Array Lengths Don't Match, Return False
	for (var i = 0, len = firstArr.length; i < len; i++) {
		//Cycle Through Array Contents
		if (firstArr[i] !== secondArr[i]) {
			//Checks if Content in Location Match
			return false; //If They Don't Match, Return False
		}
	}
	return true; //If Nothing Doesn't Match, Everything Matches; Therefore, Arrays Match
}

function objectSearch(haystack, needle) {
	var match = true;
	Object.keys(needle).forEach(function (key) {
		if (!(key in haystack) || haystack[key] !== needle[key]) {
			match = false;
		}
	});

	return match;
}

/***/ }),

/***/ "./src/utils/maps.js":
/*!***************************!*\
  !*** ./src/utils/maps.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var keyMap = exports.keyMap = function () {
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
		keys[alph[i].toUpperCase()] = i + 65;
	}

	for (var j = 0; j <= 9; j++) {
		keys[j] = j + 48;
	}

	for (var k = 0; k <= 9; k++) {
		keys['pad' + k] = k + 96;
	}

	return keys;
}();

var stringKeyMap = exports.stringKeyMap = {
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

var metaMap = exports.metaMap = {
	'ctrlKey': '^',
	'shiftKey': '+',
	'altKey': '!',
	'metaKey': '#'
};

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/unlock.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/unlock.js */"./src/unlock.js");


/***/ })

/******/ });
});