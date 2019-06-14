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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheatCode; });
/* harmony import */ var _utils_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/maps */ "./src/utils/maps.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

/**
 * @file CheatCode Class
 * @author Quangdao Nguyen
 * @see CheatCode
 */


/**
 * Converts a cheatcode in any supported format into a number array
 * @alias CheatCode.compile
 * @param {Array<string>|string} v
 * @returns {Array<number>}
 */

function compileCode(v) {
  var codeArray = typeof v === 'string' ? v.split('') : v;
  return codeArray.map(function (x) {
    return _utils_maps__WEBPACK_IMPORTED_MODULE_0__["stringKeyMap"][x] || x;
  }).map(function (item) {
    // Since cheatcodes rely on keydown instead of keypress, single letters should use the uppercase by default
    var result = _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][item.toUpperCase()] || _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][item.toLowerCase()];
    if (!result) throw new Error("Unrecognized key: ".concat(item));
    return result;
  });
}

var CheatCode =
/*#__PURE__*/
function () {
  /**
   * Callback function
   * @private
   * @type {Function|null}
   */

  /**
   * Compiled code array
   * @private
   * @type {Array<number>}
   */

  /**
   * Current keys chain
   * @private
   * @type {Array<number>}
   */

  /**
   * setTimeout for keys
   * @private
   * @type {number}
   */

  /**
   * Active state
   * @private
   * @type {Boolean}
   */

  /**
   * Duration before cheatcode timer resets
   * @name CheatCode#timeout
   * @type {Number}
   */

  /**
   * @constructs CheatCode
   * @param {String|Object} name - Identifier or settings object
   * @param {String|Array} code - Code
   * @param {Function} callback - Callback function
   */
  function CheatCode(name, _code2, _callback2) {
    _classCallCheck(this, CheatCode);

    _callback.set(this, {
      writable: true,
      value: null
    });

    _code.set(this, {
      writable: true,
      value: []
    });

    _keyslist.set(this, {
      writable: true,
      value: []
    });

    _keyTimer.set(this, {
      writable: true,
      value: null
    });

    _enabled.set(this, {
      writable: true,
      value: true
    });

    _defineProperty(this, "timeout", 500);

    if (_typeof(name) === 'object') {
      _code2 = name.code;
      _callback2 = name.callback;
      name = name.name;
    }

    this.name = name;
    this.code = _code2;
    this.callback = _callback2;
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  /**
   * The chain of keys to trigger the cheat
   * @name CheatCode#code
   * @type {Array<number>|Array<string>|String}
   */


  _createClass(CheatCode, [{
    key: "check",

    /**
     * Compare keylist with cheat code and trigger the callback
     * @method CheatCode#check
     * @param {Array<string>} keys
     * @returns {boolean}
     */
    value: function check(keys) {
      if (this.enabled && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["arraysMatch"])(this.code, keys)) {
        this.callback();
        return true;
      }

      return false;
    }
    /**
     * Handles the keypress events
     * @method CheatCode#handleKeyPress
     * @private
     * @param {KeyboardEvent} e
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      var _this = this;

      _classPrivateFieldGet(this, _keyslist).push(e.keyCode);

      this.check(_classPrivateFieldGet(this, _keyslist));
      clearTimeout(_classPrivateFieldGet(this, _keyTimer));

      _classPrivateFieldSet(this, _keyTimer, setTimeout(function () {
        _this.reset();
      }, this.timeout));
    }
    /**
     * Bind the event listener
     * @method CheatCode#bind
     */

  }, {
    key: "bind",
    value: function bind() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    /**
     * Unbind the event listener
     * @method CheatCode#unbind
     */

  }, {
    key: "unbind",
    value: function unbind() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    /**
     * Resets the current keys chain
     * @method CheatCode#reset
     */

  }, {
    key: "reset",
    value: function reset() {
      _classPrivateFieldGet(this, _keyslist).length = 0;
    }
    /**
     * Toggle the enabled state of the cheatcode
     * @method CheatCode#toggle
     * @param {boolean} [condition] - Force a toggle state
     */

  }, {
    key: "toggle",
    value: function toggle(condition) {
      _classPrivateFieldSet(this, _enabled, typeof condition !== 'undefined' ? condition : !_classPrivateFieldGet(this, _enabled));
    }
    /**
     * Sets enabled to true, shorthand for CheatCode#toggle(true)
     * @method CheatCode#enable
     */

  }, {
    key: "enable",
    value: function enable() {
      this.toggle(true);
    }
    /**
     * Sets enabled to true, shorthand for CheatCode#toggle(false)
     * @method CheatCode#disable
     */

  }, {
    key: "disable",
    value: function disable() {
      this.toggle(false);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        code: this.code
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.name;
    }
  }, {
    key: "code",
    set: function set(v) {
      _classPrivateFieldSet(this, _code, compileCode(v));
    },
    get: function get() {
      return _classPrivateFieldGet(this, _code);
    }
    /**
     * @name CheatCode#callback
     * @type {function}
     */

  }, {
    key: "callback",
    set: function set(v) {
      _classPrivateFieldSet(this, _callback, v);
    },
    get: function get() {
      return _classPrivateFieldGet(this, _callback);
    }
    /**
     * Get enabled state.
     *
     * @name CheatCode#enabled
     * @type {boolean}
     * @readonly
     */

  }, {
    key: "enabled",
    get: function get() {
      return _classPrivateFieldGet(this, _enabled);
    }
  }]);

  return CheatCode;
}();

var _callback = new WeakMap();

var _code = new WeakMap();

var _keyslist = new WeakMap();

var _keyTimer = new WeakMap();

var _enabled = new WeakMap();

_defineProperty(CheatCode, "compile", compileCode);



/***/ }),

/***/ "./src/shortcut.js":
/*!*************************!*\
  !*** ./src/shortcut.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shortcut; });
/* harmony import */ var _utils_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/maps */ "./src/utils/maps.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ "./src/utils/helpers.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @file Shortcut Class
 * @author Quangdao Nguyen
 * @see Shortcut
 */


var triggerRegex = /^(-)?([\^+!#]*)(.)$/;
/**
 * @typedef {Object} KeyEvent
 * @memberOf Shortcut
 * @property {string} keyCode - Numeric Key Code
 * @property {bool} ctrlKey - Ctrl is pressed
 * @property {bool} shiftKey - Shift is pressed
 * @property {bool} altKey - Alt is pressed
 * @property {bool} metaKey - Windows/Meta is pressed
 */

/**
 * @typedef {Object} HotKey
 * @memberOf Shortcut
 * @property {KeyEvent} keyEvent
 * @property {bool} preventDefault
 */

/**
 * @private
 * @param {string} string
 * @returns HotKey
 */

function parseHotkey(string) {
  var match = string.match(triggerRegex);
  if (!match) throw new Error('Invalid Hotkey: ' + string);

  var _match = _slicedToArray(match, 4),
      prevent = _match[1],
      meta = _match[2],
      key = _match[3];

  var keyEvent = {};
  var keyName = _utils_maps__WEBPACK_IMPORTED_MODULE_0__["stringKeyMap"][key] || key;
  keyEvent.keyCode = _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][keyName.toUpperCase()] || _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][keyName.toLowerCase()];
  if (!keyEvent.keyCode) throw new Error('Invalid Key: ' + key);
  Object.keys(_utils_maps__WEBPACK_IMPORTED_MODULE_0__["metaMap"]).forEach(function (metaName) {
    var metaKey = _utils_maps__WEBPACK_IMPORTED_MODULE_0__["metaMap"][metaName];
    keyEvent[metaName] = meta.indexOf(metaKey) > -1;
  });
  return {
    keyEvent: keyEvent,
    preventDefault: !!prevent
  };
}

var Shortcut =
/*#__PURE__*/
function () {
  /**
   * Hotkey data
   * @type {Object}
   */

  /**
   * Hotkey string
   * @private
   * @type {string}
   */

  /**
   * Active state
   * @private
   * @type {boolean}
   */

  /**
   * @constructs Shortcut
   * @param {Object|string} hotkey - Hotkey string or settings object
   * @param {Element|string} [element] - Bind to element
   * @param {Function} callback - function to trigger on hotkey
   */
  function Shortcut(_hotkey2, element, callback) {
    _classCallCheck(this, Shortcut);

    _defineProperty(this, "data", {});

    _hotkey.set(this, {
      writable: true,
      value: ''
    });

    _enabled.set(this, {
      writable: true,
      value: true
    });

    if (_typeof(_hotkey2) === 'object') {
      element = _hotkey2.element;
      callback = _hotkey2.callback;
      _hotkey2 = _hotkey2.hotkey;
    } else if (!callback) {
      callback = element;
    }

    this.callback = callback;
    this.element = element;
    this.hotkey = _hotkey2;
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  /**
   * The hotkey string of the shortcut
   * @name Shortcut#hotkey
   * @type {string}
   */


  _createClass(Shortcut, [{
    key: "toggle",

    /**
     * Toggle the enabled state of the shortcut
     * @name Shortcut#toggle
     * @param {boolean} [condition] - Force a toggle state
     */
    value: function toggle(condition) {
      _classPrivateFieldSet(this, _enabled, typeof condition !== 'undefined' ? condition : !_classPrivateFieldGet(this, _enabled));
    }
    /**
     * Sets enabled to true, shorthand for Shortcut#toggle(true)
     * @name Shortcut#enable
     */

  }, {
    key: "enable",
    value: function enable() {
      this.toggle(true);
    }
    /**
     * Sets enabled to false, shorthand for Shortcut#toggle(false)
     * @name Shortcut#disable
     */

  }, {
    key: "disable",
    value: function disable() {
      this.toggle(false);
    }
    /**
     * Abstraction of check for the purpose of binding and unbinding listeners
     * @private
     * @alias check
     * @param e
     */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      this.check(e);
    }
    /**
     * Compares keyboard event with Shortcut data
     * @name Shortcut#check
     * @param {KeyboardEvent} e
     */

  }, {
    key: "check",
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

      if (this.enabled && Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["objectSearch"])(e, this.data.keyEvent)) {
        if (this.data.preventDefault) e.preventDefault();
        this.callback();
      }
    }
    /**
     * Bind the event listener
     * @name Shortcut#bind
     */

  }, {
    key: "bind",
    value: function bind() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    /**
     * Unbind the event listener
     * @name Shortcut#unbind
     */

  }, {
    key: "unbind",
    value: function unbind() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    /**
     * Parses a hotkey string into a KeyEvent object
     * @alias parseHotkey
     * @name Shortcut.parse
     * @public
     */

  }, {
    key: "hotkey",
    get: function get() {
      return _classPrivateFieldGet(this, _hotkey);
    },
    set: function set(string) {
      this.data = parseHotkey(string);

      _classPrivateFieldSet(this, _hotkey, string);
    }
    /**
     * Gets enabled state.
     * @name Shortcut#enabled
     * @type {boolean}
     * @readonly
     */

  }, {
    key: "enabled",
    get: function get() {
      return _classPrivateFieldGet(this, _enabled);
    }
  }]);

  return Shortcut;
}();

var _hotkey = new WeakMap();

var _enabled = new WeakMap();

_defineProperty(Shortcut, "parse", parseHotkey);



/***/ }),

/***/ "./src/unlock.js":
/*!***********************!*\
  !*** ./src/unlock.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Unlock; });
/* harmony import */ var _cheatcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cheatcode */ "./src/cheatcode.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortcut */ "./src/shortcut.js");
/* harmony import */ var _utils_presets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/presets */ "./src/utils/presets.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/**
 * @file Unlock Class
 * @author Quangdao Nguyen
 * @see Unlock
 */




var Unlock =
/*#__PURE__*/
function () {
  /**
   * Array of cheats
   * @private
   * @type {Array<CheatCode>}
   */

  /**
   * Array of shortcuts
   * @private
   * @type {Array<Shortcut>}
   */

  /**
   * Current keys chain
   * @private
   * @type {Array<number>}
   */

  /**
   * Active state
   * @private
   * @type {boolean}
   */

  /**
   * @typedef UnlockJSOptions
   * @memberOf Unlock
   * @property {number} timeout - Duration before cheatcode timer resets,
   * @property {boolean} resetOnMatch - Whether or not completing a cheatcode resets the timer
   */

  /**
   * @constructs Unlock
   * @param {UnlockJSOptions} options
   */
  function Unlock() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Unlock);

    _cheats.set(this, {
      writable: true,
      value: []
    });

    _shortcuts.set(this, {
      writable: true,
      value: []
    });

    _keyslist.set(this, {
      writable: true,
      value: []
    });

    _enabled.set(this, {
      writable: true,
      value: true
    });

    var _options$timeout = options.timeout,
        timeout = _options$timeout === void 0 ? 500 : _options$timeout,
        _options$resetOnMatch = options.resetOnMatch,
        resetOnMatch = _options$resetOnMatch === void 0 ? false : _options$resetOnMatch;
    this.timeout = timeout;
    Object.assign(this, {
      timeout: timeout,
      resetOnMatch: resetOnMatch
    });
    this.bindListener();
  }
  /**
   * Binds the event listener
   * @private
   */


  _createClass(Unlock, [{
    key: "bindListener",
    value: function bindListener() {
      var _this = this;

      var keyTimer;
      document.addEventListener('keydown', function (e) {
        if (!_this.enabled) return true;

        _classPrivateFieldGet(_this, _keyslist).push(e.which);

        clearTimeout(keyTimer);
        keyTimer = setTimeout(function () {
          _this.reset();
        }, _this.timeout);

        _classPrivateFieldGet(_this, _cheats).forEach(function (cheat) {
          var matched = cheat.check(_classPrivateFieldGet(_this, _keyslist));
          if (matched && _this.resetOnMatch) _this.reset();
        });

        _classPrivateFieldGet(_this, _shortcuts).forEach(function (shortcut) {
          shortcut.check(e);
        });
      });
    }
    /**
     * Adds a cheatcode
     * @name Unlock#addCheat
     * @see {@link CheatCode.constructor} for parameters
     * @returns {CheatCode}
     */

  }, {
    key: "addCheat",
    value: function addCheat() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var name = typeof args[0] === 'string' ? args[0] : args.name;
      var foundCheat = this.find(name);

      if (foundCheat) {
        throw Error('A cheat has already been created with the name ' + foundCheat.name);
      }

      var cheatCode = _construct(_cheatcode__WEBPACK_IMPORTED_MODULE_0__["default"], args);

      _classPrivateFieldGet(this, _cheats).push(cheatCode);

      return cheatCode;
    }
    /**
     * Adds a shortcut
     * @name Unlock#addShortcut
     * @see {@see Shortcut.constructor} for parameters
     * @returns {Shortcut}
     */

  }, {
    key: "addShortcut",
    value: function addShortcut() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var shortcut = _construct(_shortcut__WEBPACK_IMPORTED_MODULE_1__["default"], args);

      _classPrivateFieldGet(this, _shortcuts).push(shortcut);

      return shortcut;
    }
    /**
     * Finds a cheat created with Unlock by name
     * @name Unlock#find
     * @param {string} name - Name of cheatcode
     * @returns {CheatCode}
     */

  }, {
    key: "find",
    value: function find(name) {
      return _classPrivateFieldGet(this, _cheats).find(function (e) {
        return e.name === name;
      });
    }
    /**
     * Resets the current keys chain
     * @name Unlock#reset
     */

  }, {
    key: "reset",
    value: function reset() {
      _classPrivateFieldGet(this, _keyslist).length = 0;
    }
    /**
     * Get enabled state
     * @name Unlock#enabled
     * @type {boolean}
     * @readonly
     */

  }, {
    key: "toggle",

    /**
     * Toggle the enabled state of the unlock object
     * @name Unlock#toggle
     * @param {boolean} [condition] - Force a toggle state
     */
    value: function toggle(condition) {
      _classPrivateFieldSet(this, _enabled, typeof condition !== 'undefined' ? condition : !_classPrivateFieldGet(this, _enabled));
    }
    /**
     * Sets enabled to true, shorthand for Unlock#toggle(true)
     * @name Unlock#enable
     */

  }, {
    key: "enable",
    value: function enable() {
      this.toggle(true);
    }
    /**
     * Sets enabled to false, shorthand for Unlock#toggle(false)
     * @name Unlock#disable
     */

  }, {
    key: "disable",
    value: function disable() {
      this.toggle(false);
    }
    /* @alias CheatCode */

  }, {
    key: "enabled",
    get: function get() {
      return _classPrivateFieldGet(this, _enabled);
    }
  }]);

  return Unlock;
}();

var _cheats = new WeakMap();

var _shortcuts = new WeakMap();

var _keyslist = new WeakMap();

var _enabled = new WeakMap();

_defineProperty(Unlock, "CheatCode", _cheatcode__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(Unlock, "Shortcut", _shortcut__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(Unlock, "presets", _utils_presets__WEBPACK_IMPORTED_MODULE_2__);



/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: arraysMatch, objectSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysMatch", function() { return arraysMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSearch", function() { return objectSearch; });
/**
 * Checks if two arrays match exactly
 * @param {Array} firstArr
 * @param {Array} secondArr
 * @returns {boolean}
 */
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
/**
 * Check if one object is fully contained in another
 * @param {Object} haystack - Object to search in
 * @param {Object} needle - Data to search for
 * @returns {boolean}
 */

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
/*! exports provided: keyMap, stringKeyMap, metaMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyMap", function() { return keyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringKeyMap", function() { return stringKeyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaMap", function() { return metaMap; });
/**
 * @type {Object.<string, number>}
 * Maps key string to numeric keycode value
 */
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
    keys[alph[i].toUpperCase()] = i + 65;
  }

  for (var j = 0; j <= 9; j++) {
    keys[j] = j + 48;
  }

  for (var k = 0; k <= 9; k++) {
    keys["pad".concat(k)] = k + 96;
  }

  return keys;
}();
/**
 * @type {Object.<char, string>}
 * Maps character to equivalent string
 */

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
/**
 * @type {Object.<string, char>}
 * Maps meta keys to shortcut character
 */

var metaMap = {
  'ctrlKey': '^',
  'shiftKey': '+',
  'altKey': '!',
  'metaKey': '#'
};

/***/ }),

/***/ "./src/utils/presets.js":
/*!******************************!*\
  !*** ./src/utils/presets.js ***!
  \******************************/
/*! exports provided: KONAMI, MK_BLOOD, GOD_MODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KONAMI", function() { return KONAMI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MK_BLOOD", function() { return MK_BLOOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOD_MODE", function() { return GOD_MODE; });
/**
 * @file Presets
 * @author Quangdao Nguyen
 * @namespace Presets
 */

/**
 * Konami Code (Up, Up, Down, Down, Left, Right, Left, Right, B, A, Enter)
 * @name Presets.KONAMI
 * @const
 * @type {string}
 */
var KONAMI = 'UUDDLRLRba>';
/**
 * Mortal Kombat Blood Code (A, B, A, C, A, B, B)
 * @name Presets.MK_BLOOD
 * @const
 * @type {string}
 */

var MK_BLOOD = 'abacabb';
/**
 * DOOM God Mode Code (I, D, D, Q, D)
 * @name Presets.GOD_MODE
 * @const
 * @type {string}
 */

var GOD_MODE = 'iddqd';

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/unlock.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/unlock.js */"./src/unlock.js");


/***/ })

/******/ })["default"];
});