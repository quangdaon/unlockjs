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
var cov_2glb4q8d04 = function () {
  var path = "C:\\Development\\javascript\\unlockjs\\src\\cheatcode.js";
  var hash = "85ea3f68b7d61d908b0568ce9635172059f783a7";

  var Function = function () {}.constructor;

  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Development\\javascript\\unlockjs\\src\\cheatcode.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 19
        },
        end: {
          line: 17,
          column: 60
        }
      },
      "1": {
        start: {
          line: 19,
          column: 1
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "2": {
        start: {
          line: 20,
          column: 12
        },
        end: {
          line: 20,
          column: 32
        }
      },
      "3": {
        start: {
          line: 23,
          column: 18
        },
        end: {
          line: 23,
          column: 74
        }
      },
      "4": {
        start: {
          line: 25,
          column: 3
        },
        end: {
          line: 25,
          column: 61
        }
      },
      "5": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 25,
          column: 61
        }
      },
      "6": {
        start: {
          line: 27,
          column: 3
        },
        end: {
          line: 27,
          column: 17
        }
      },
      "7": {
        start: {
          line: 82,
          column: 2
        },
        end: {
          line: 86,
          column: 3
        }
      },
      "8": {
        start: {
          line: 83,
          column: 3
        },
        end: {
          line: 83,
          column: 20
        }
      },
      "9": {
        start: {
          line: 84,
          column: 3
        },
        end: {
          line: 84,
          column: 28
        }
      },
      "10": {
        start: {
          line: 85,
          column: 3
        },
        end: {
          line: 85,
          column: 20
        }
      },
      "11": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 88,
          column: 19
        }
      },
      "12": {
        start: {
          line: 89,
          column: 2
        },
        end: {
          line: 89,
          column: 19
        }
      },
      "13": {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 90,
          column: 27
        }
      },
      "14": {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 92,
          column: 55
        }
      },
      "15": {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 101,
          column: 30
        }
      },
      "16": {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 105,
          column: 20
        }
      },
      "17": {
        start: {
          line: 113,
          column: 2
        },
        end: {
          line: 113,
          column: 21
        }
      },
      "18": {
        start: {
          line: 117,
          column: 2
        },
        end: {
          line: 117,
          column: 24
        }
      },
      "19": {
        start: {
          line: 128,
          column: 2
        },
        end: {
          line: 128,
          column: 23
        }
      },
      "20": {
        start: {
          line: 138,
          column: 2
        },
        end: {
          line: 141,
          column: 3
        }
      },
      "21": {
        start: {
          line: 139,
          column: 3
        },
        end: {
          line: 139,
          column: 19
        }
      },
      "22": {
        start: {
          line: 140,
          column: 3
        },
        end: {
          line: 140,
          column: 15
        }
      },
      "23": {
        start: {
          line: 142,
          column: 2
        },
        end: {
          line: 142,
          column: 15
        }
      },
      "24": {
        start: {
          line: 152,
          column: 2
        },
        end: {
          line: 152,
          column: 33
        }
      },
      "25": {
        start: {
          line: 154,
          column: 2
        },
        end: {
          line: 154,
          column: 29
        }
      },
      "26": {
        start: {
          line: 156,
          column: 2
        },
        end: {
          line: 156,
          column: 31
        }
      },
      "27": {
        start: {
          line: 157,
          column: 2
        },
        end: {
          line: 159,
          column: 19
        }
      },
      "28": {
        start: {
          line: 158,
          column: 3
        },
        end: {
          line: 158,
          column: 16
        }
      },
      "29": {
        start: {
          line: 167,
          column: 2
        },
        end: {
          line: 167,
          column: 60
        }
      },
      "30": {
        start: {
          line: 175,
          column: 2
        },
        end: {
          line: 175,
          column: 63
        }
      },
      "31": {
        start: {
          line: 183,
          column: 2
        },
        end: {
          line: 183,
          column: 28
        }
      },
      "32": {
        start: {
          line: 192,
          column: 2
        },
        end: {
          line: 192,
          column: 80
        }
      },
      "33": {
        start: {
          line: 200,
          column: 2
        },
        end: {
          line: 200,
          column: 20
        }
      },
      "34": {
        start: {
          line: 208,
          column: 2
        },
        end: {
          line: 208,
          column: 21
        }
      },
      "35": {
        start: {
          line: 214,
          column: 2
        },
        end: {
          line: 217,
          column: 4
        }
      },
      "36": {
        start: {
          line: 221,
          column: 2
        },
        end: {
          line: 221,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "compileCode",
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 20
          }
        },
        loc: {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 7
          },
          end: {
            line: 20,
            column: 8
          }
        },
        loc: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 32
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 7
          },
          end: {
            line: 21,
            column: 8
          }
        },
        loc: {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 21
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 81,
            column: 1
          },
          end: {
            line: 81,
            column: 2
          }
        },
        loc: {
          start: {
            line: 81,
            column: 35
          },
          end: {
            line: 93,
            column: 2
          }
        },
        line: 81
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 100,
            column: 1
          },
          end: {
            line: 100,
            column: 2
          }
        },
        loc: {
          start: {
            line: 100,
            column: 13
          },
          end: {
            line: 102,
            column: 2
          }
        },
        line: 100
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 104,
            column: 1
          },
          end: {
            line: 104,
            column: 2
          }
        },
        loc: {
          start: {
            line: 104,
            column: 12
          },
          end: {
            line: 106,
            column: 2
          }
        },
        line: 104
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 112,
            column: 1
          },
          end: {
            line: 112,
            column: 2
          }
        },
        loc: {
          start: {
            line: 112,
            column: 17
          },
          end: {
            line: 114,
            column: 2
          }
        },
        line: 112
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 116,
            column: 1
          },
          end: {
            line: 116,
            column: 2
          }
        },
        loc: {
          start: {
            line: 116,
            column: 16
          },
          end: {
            line: 118,
            column: 2
          }
        },
        line: 116
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 127,
            column: 1
          },
          end: {
            line: 127,
            column: 2
          }
        },
        loc: {
          start: {
            line: 127,
            column: 15
          },
          end: {
            line: 129,
            column: 2
          }
        },
        line: 127
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 137,
            column: 1
          },
          end: {
            line: 137,
            column: 2
          }
        },
        loc: {
          start: {
            line: 137,
            column: 13
          },
          end: {
            line: 143,
            column: 2
          }
        },
        line: 137
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 151,
            column: 1
          },
          end: {
            line: 151,
            column: 2
          }
        },
        loc: {
          start: {
            line: 151,
            column: 19
          },
          end: {
            line: 160,
            column: 2
          }
        },
        line: 151
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 157,
            column: 30
          },
          end: {
            line: 157,
            column: 31
          }
        },
        loc: {
          start: {
            line: 157,
            column: 36
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 157
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 166,
            column: 1
          },
          end: {
            line: 166,
            column: 2
          }
        },
        loc: {
          start: {
            line: 166,
            column: 8
          },
          end: {
            line: 168,
            column: 2
          }
        },
        line: 166
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 174,
            column: 1
          },
          end: {
            line: 174,
            column: 2
          }
        },
        loc: {
          start: {
            line: 174,
            column: 10
          },
          end: {
            line: 176,
            column: 2
          }
        },
        line: 174
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 182,
            column: 1
          },
          end: {
            line: 182,
            column: 2
          }
        },
        loc: {
          start: {
            line: 182,
            column: 9
          },
          end: {
            line: 184,
            column: 2
          }
        },
        line: 182
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 191,
            column: 1
          },
          end: {
            line: 191,
            column: 2
          }
        },
        loc: {
          start: {
            line: 191,
            column: 19
          },
          end: {
            line: 193,
            column: 2
          }
        },
        line: 191
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 199,
            column: 1
          },
          end: {
            line: 199,
            column: 2
          }
        },
        loc: {
          start: {
            line: 199,
            column: 10
          },
          end: {
            line: 201,
            column: 2
          }
        },
        line: 199
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 207,
            column: 1
          },
          end: {
            line: 207,
            column: 2
          }
        },
        loc: {
          start: {
            line: 207,
            column: 11
          },
          end: {
            line: 209,
            column: 2
          }
        },
        line: 207
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 213,
            column: 1
          },
          end: {
            line: 213,
            column: 2
          }
        },
        loc: {
          start: {
            line: 213,
            column: 10
          },
          end: {
            line: 218,
            column: 2
          }
        },
        line: 213
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 220,
            column: 1
          },
          end: {
            line: 220,
            column: 2
          }
        },
        loc: {
          start: {
            line: 220,
            column: 12
          },
          end: {
            line: 222,
            column: 2
          }
        },
        line: 220
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 19
          },
          end: {
            line: 17,
            column: 60
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 45
          },
          end: {
            line: 17,
            column: 56
          }
        }, {
          start: {
            line: 17,
            column: 59
          },
          end: {
            line: 17,
            column: 60
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 27
          }
        }, {
          start: {
            line: 20,
            column: 31
          },
          end: {
            line: 20,
            column: 32
          }
        }],
        line: 20
      },
      "2": {
        loc: {
          start: {
            line: 23,
            column: 18
          },
          end: {
            line: 23,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 18
          },
          end: {
            line: 23,
            column: 44
          }
        }, {
          start: {
            line: 23,
            column: 48
          },
          end: {
            line: 23,
            column: 74
          }
        }],
        line: 23
      },
      "3": {
        loc: {
          start: {
            line: 25,
            column: 3
          },
          end: {
            line: 25,
            column: 61
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 3
          },
          end: {
            line: 25,
            column: 61
          }
        }, {
          start: {
            line: 25,
            column: 3
          },
          end: {
            line: 25,
            column: 61
          }
        }],
        line: 25
      },
      "4": {
        loc: {
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        }, {
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        }],
        line: 82
      },
      "5": {
        loc: {
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 141,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 141,
            column: 3
          }
        }, {
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 141,
            column: 3
          }
        }],
        line: 138
      },
      "6": {
        loc: {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 138,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 138,
            column: 18
          }
        }, {
          start: {
            line: 138,
            column: 22
          },
          end: {
            line: 138,
            column: 50
          }
        }],
        line: 138
      },
      "7": {
        loc: {
          start: {
            line: 192,
            column: 18
          },
          end: {
            line: 192,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 192,
            column: 53
          },
          end: {
            line: 192,
            column: 62
          }
        }, {
          start: {
            line: 192,
            column: 65
          },
          end: {
            line: 192,
            column: 79
          }
        }],
        line: 192
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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
  cov_2glb4q8d04.f[0]++;
  var codeArray = (cov_2glb4q8d04.s[0]++, typeof v === 'string' ? (cov_2glb4q8d04.b[0][0]++, v.split('')) : (cov_2glb4q8d04.b[0][1]++, v));
  cov_2glb4q8d04.s[1]++;
  return codeArray.map(function (x) {
    cov_2glb4q8d04.f[1]++;
    cov_2glb4q8d04.s[2]++;
    return (cov_2glb4q8d04.b[1][0]++, _utils_maps__WEBPACK_IMPORTED_MODULE_0__["stringKeyMap"][x]) || (cov_2glb4q8d04.b[1][1]++, x);
  }).map(function (item) {
    cov_2glb4q8d04.f[2]++;
    // Since cheatcodes rely on keydown instead of keypress, single letters should use the uppercase by default
    var result = (cov_2glb4q8d04.s[3]++, (cov_2glb4q8d04.b[2][0]++, _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][item.toUpperCase()]) || (cov_2glb4q8d04.b[2][1]++, _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][item.toLowerCase()]));
    cov_2glb4q8d04.s[4]++;

    if (!result) {
      cov_2glb4q8d04.b[3][0]++;
      cov_2glb4q8d04.s[5]++;
      throw new Error("Unrecognized key: ".concat(item));
    } else {
      cov_2glb4q8d04.b[3][1]++;
    }

    cov_2glb4q8d04.s[6]++;
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

    cov_2glb4q8d04.f[3]++;
    cov_2glb4q8d04.s[7]++;

    if (_typeof(name) === 'object') {
      cov_2glb4q8d04.b[4][0]++;
      cov_2glb4q8d04.s[8]++;
      _code2 = name.code;
      cov_2glb4q8d04.s[9]++;
      _callback2 = name.callback;
      cov_2glb4q8d04.s[10]++;
      name = name.name;
    } else {
      cov_2glb4q8d04.b[4][1]++;
    }

    cov_2glb4q8d04.s[11]++;
    this.name = name;
    cov_2glb4q8d04.s[12]++;
    this.code = _code2;
    cov_2glb4q8d04.s[13]++;
    this.callback = _callback2;
    cov_2glb4q8d04.s[14]++;
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
      cov_2glb4q8d04.f[9]++;
      cov_2glb4q8d04.s[20]++;

      if ((cov_2glb4q8d04.b[6][0]++, this.enabled) && (cov_2glb4q8d04.b[6][1]++, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["arraysMatch"])(this.code, keys))) {
        cov_2glb4q8d04.b[5][0]++;
        cov_2glb4q8d04.s[21]++;
        this.callback();
        cov_2glb4q8d04.s[22]++;
        return true;
      } else {
        cov_2glb4q8d04.b[5][1]++;
      }

      cov_2glb4q8d04.s[23]++;
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

      cov_2glb4q8d04.f[10]++;
      cov_2glb4q8d04.s[24]++;

      _classPrivateFieldGet(this, _keyslist).push(e.keyCode);

      cov_2glb4q8d04.s[25]++;
      this.check(_classPrivateFieldGet(this, _keyslist));
      cov_2glb4q8d04.s[26]++;
      clearTimeout(_classPrivateFieldGet(this, _keyTimer));
      cov_2glb4q8d04.s[27]++;

      _classPrivateFieldSet(this, _keyTimer, setTimeout(function () {
        cov_2glb4q8d04.f[11]++;
        cov_2glb4q8d04.s[28]++;

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
      cov_2glb4q8d04.f[12]++;
      cov_2glb4q8d04.s[29]++;
      document.addEventListener('keydown', this.handleKeyPress);
    }
    /**
     * Unbind the event listener
     * @method CheatCode#unbind
     */

  }, {
    key: "unbind",
    value: function unbind() {
      cov_2glb4q8d04.f[13]++;
      cov_2glb4q8d04.s[30]++;
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    /**
     * Resets the current keys chain
     * @method CheatCode#reset
     */

  }, {
    key: "reset",
    value: function reset() {
      cov_2glb4q8d04.f[14]++;
      cov_2glb4q8d04.s[31]++;
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
      cov_2glb4q8d04.f[15]++;
      cov_2glb4q8d04.s[32]++;

      _classPrivateFieldSet(this, _enabled, typeof condition !== 'undefined' ? (cov_2glb4q8d04.b[7][0]++, condition) : (cov_2glb4q8d04.b[7][1]++, !_classPrivateFieldGet(this, _enabled)));
    }
    /**
     * Sets enabled to true, shorthand for CheatCode#toggle(true)
     * @method CheatCode#enable
     */

  }, {
    key: "enable",
    value: function enable() {
      cov_2glb4q8d04.f[16]++;
      cov_2glb4q8d04.s[33]++;
      this.toggle(true);
    }
    /**
     * Sets enabled to true, shorthand for CheatCode#toggle(false)
     * @method CheatCode#disable
     */

  }, {
    key: "disable",
    value: function disable() {
      cov_2glb4q8d04.f[17]++;
      cov_2glb4q8d04.s[34]++;
      this.toggle(false);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      cov_2glb4q8d04.f[18]++;
      cov_2glb4q8d04.s[35]++;
      return {
        name: this.name,
        code: this.code
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_2glb4q8d04.f[19]++;
      cov_2glb4q8d04.s[36]++;
      return this.name;
    }
  }, {
    key: "code",
    set: function set(v) {
      cov_2glb4q8d04.f[4]++;
      cov_2glb4q8d04.s[15]++;

      _classPrivateFieldSet(this, _code, compileCode(v));
    },
    get: function get() {
      cov_2glb4q8d04.f[5]++;
      cov_2glb4q8d04.s[16]++;
      return _classPrivateFieldGet(this, _code);
    }
    /**
     * @name CheatCode#callback
     * @type {function}
     */

  }, {
    key: "callback",
    set: function set(v) {
      cov_2glb4q8d04.f[6]++;
      cov_2glb4q8d04.s[17]++;

      _classPrivateFieldSet(this, _callback, v);
    },
    get: function get() {
      cov_2glb4q8d04.f[7]++;
      cov_2glb4q8d04.s[18]++;
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
      cov_2glb4q8d04.f[8]++;
      cov_2glb4q8d04.s[19]++;
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
var cov_1b0b6g6ip8 = function () {
  var path = "C:\\Development\\javascript\\unlockjs\\src\\shortcut.js";
  var hash = "43142431283a480c632b2d607af40e2a6caec693";

  var Function = function () {}.constructor;

  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Development\\javascript\\unlockjs\\src\\shortcut.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 21
        },
        end: {
          line: 10,
          column: 42
        }
      },
      "1": {
        start: {
          line: 35,
          column: 15
        },
        end: {
          line: 35,
          column: 41
        }
      },
      "2": {
        start: {
          line: 36,
          column: 1
        },
        end: {
          line: 36,
          column: 58
        }
      },
      "3": {
        start: {
          line: 36,
          column: 13
        },
        end: {
          line: 36,
          column: 58
        }
      },
      "4": {
        start: {
          line: 38,
          column: 32
        },
        end: {
          line: 38,
          column: 37
        }
      },
      "5": {
        start: {
          line: 40,
          column: 18
        },
        end: {
          line: 40,
          column: 20
        }
      },
      "6": {
        start: {
          line: 42,
          column: 17
        },
        end: {
          line: 42,
          column: 41
        }
      },
      "7": {
        start: {
          line: 44,
          column: 1
        },
        end: {
          line: 44,
          column: 83
        }
      },
      "8": {
        start: {
          line: 46,
          column: 1
        },
        end: {
          line: 46,
          column: 63
        }
      },
      "9": {
        start: {
          line: 46,
          column: 24
        },
        end: {
          line: 46,
          column: 63
        }
      },
      "10": {
        start: {
          line: 48,
          column: 1
        },
        end: {
          line: 51,
          column: 4
        }
      },
      "11": {
        start: {
          line: 49,
          column: 18
        },
        end: {
          line: 49,
          column: 35
        }
      },
      "12": {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 50,
          column: 50
        }
      },
      "13": {
        start: {
          line: 53,
          column: 1
        },
        end: {
          line: 53,
          column: 48
        }
      },
      "14": {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 90,
          column: 3
        }
      },
      "15": {
        start: {
          line: 85,
          column: 3
        },
        end: {
          line: 85,
          column: 28
        }
      },
      "16": {
        start: {
          line: 86,
          column: 3
        },
        end: {
          line: 86,
          column: 30
        }
      },
      "17": {
        start: {
          line: 87,
          column: 3
        },
        end: {
          line: 87,
          column: 26
        }
      },
      "18": {
        start: {
          line: 88,
          column: 9
        },
        end: {
          line: 90,
          column: 3
        }
      },
      "19": {
        start: {
          line: 89,
          column: 3
        },
        end: {
          line: 89,
          column: 22
        }
      },
      "20": {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 92,
          column: 27
        }
      },
      "21": {
        start: {
          line: 93,
          column: 2
        },
        end: {
          line: 93,
          column: 25
        }
      },
      "22": {
        start: {
          line: 94,
          column: 2
        },
        end: {
          line: 94,
          column: 23
        }
      },
      "23": {
        start: {
          line: 96,
          column: 2
        },
        end: {
          line: 96,
          column: 55
        }
      },
      "24": {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 105,
          column: 22
        }
      },
      "25": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 109,
          column: 34
        }
      },
      "26": {
        start: {
          line: 110,
          column: 2
        },
        end: {
          line: 110,
          column: 24
        }
      },
      "27": {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 120,
          column: 23
        }
      },
      "28": {
        start: {
          line: 129,
          column: 2
        },
        end: {
          line: 129,
          column: 80
        }
      },
      "29": {
        start: {
          line: 137,
          column: 2
        },
        end: {
          line: 137,
          column: 20
        }
      },
      "30": {
        start: {
          line: 145,
          column: 2
        },
        end: {
          line: 145,
          column: 21
        }
      },
      "31": {
        start: {
          line: 155,
          column: 2
        },
        end: {
          line: 155,
          column: 16
        }
      },
      "32": {
        start: {
          line: 164,
          column: 15
        },
        end: {
          line: 164,
          column: 27
        }
      },
      "33": {
        start: {
          line: 165,
          column: 2
        },
        end: {
          line: 173,
          column: 3
        }
      },
      "34": {
        start: {
          line: 166,
          column: 3
        },
        end: {
          line: 172,
          column: 4
        }
      },
      "35": {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 169,
          column: 5
        }
      },
      "36": {
        start: {
          line: 168,
          column: 5
        },
        end: {
          line: 168,
          column: 12
        }
      },
      "37": {
        start: {
          line: 170,
          column: 10
        },
        end: {
          line: 172,
          column: 4
        }
      },
      "38": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 171,
          column: 11
        }
      },
      "39": {
        start: {
          line: 175,
          column: 2
        },
        end: {
          line: 178,
          column: 3
        }
      },
      "40": {
        start: {
          line: 176,
          column: 3
        },
        end: {
          line: 176,
          column: 52
        }
      },
      "41": {
        start: {
          line: 176,
          column: 33
        },
        end: {
          line: 176,
          column: 52
        }
      },
      "42": {
        start: {
          line: 177,
          column: 3
        },
        end: {
          line: 177,
          column: 19
        }
      },
      "43": {
        start: {
          line: 186,
          column: 2
        },
        end: {
          line: 186,
          column: 60
        }
      },
      "44": {
        start: {
          line: 194,
          column: 2
        },
        end: {
          line: 194,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "parseHotkey",
        decl: {
          start: {
            line: 34,
            column: 9
          },
          end: {
            line: 34,
            column: 20
          }
        },
        loc: {
          start: {
            line: 34,
            column: 29
          },
          end: {
            line: 54,
            column: 1
          }
        },
        line: 34
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 48,
            column: 30
          },
          end: {
            line: 48,
            column: 31
          }
        },
        loc: {
          start: {
            line: 48,
            column: 42
          },
          end: {
            line: 51,
            column: 2
          }
        },
        line: 48
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 83,
            column: 1
          },
          end: {
            line: 83,
            column: 2
          }
        },
        loc: {
          start: {
            line: 83,
            column: 40
          },
          end: {
            line: 97,
            column: 2
          }
        },
        line: 83
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 104,
            column: 1
          },
          end: {
            line: 104,
            column: 2
          }
        },
        loc: {
          start: {
            line: 104,
            column: 14
          },
          end: {
            line: 106,
            column: 2
          }
        },
        line: 104
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 108,
            column: 1
          },
          end: {
            line: 108,
            column: 2
          }
        },
        loc: {
          start: {
            line: 108,
            column: 20
          },
          end: {
            line: 111,
            column: 2
          }
        },
        line: 108
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 119,
            column: 1
          },
          end: {
            line: 119,
            column: 2
          }
        },
        loc: {
          start: {
            line: 119,
            column: 15
          },
          end: {
            line: 121,
            column: 2
          }
        },
        line: 119
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 128,
            column: 1
          },
          end: {
            line: 128,
            column: 2
          }
        },
        loc: {
          start: {
            line: 128,
            column: 19
          },
          end: {
            line: 130,
            column: 2
          }
        },
        line: 128
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 136,
            column: 1
          },
          end: {
            line: 136,
            column: 2
          }
        },
        loc: {
          start: {
            line: 136,
            column: 10
          },
          end: {
            line: 138,
            column: 2
          }
        },
        line: 136
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 144,
            column: 1
          },
          end: {
            line: 144,
            column: 2
          }
        },
        loc: {
          start: {
            line: 144,
            column: 11
          },
          end: {
            line: 146,
            column: 2
          }
        },
        line: 144
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 154,
            column: 1
          },
          end: {
            line: 154,
            column: 2
          }
        },
        loc: {
          start: {
            line: 154,
            column: 19
          },
          end: {
            line: 156,
            column: 2
          }
        },
        line: 154
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 163,
            column: 1
          },
          end: {
            line: 163,
            column: 2
          }
        },
        loc: {
          start: {
            line: 163,
            column: 10
          },
          end: {
            line: 179,
            column: 2
          }
        },
        line: 163
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 185,
            column: 1
          },
          end: {
            line: 185,
            column: 2
          }
        },
        loc: {
          start: {
            line: 185,
            column: 8
          },
          end: {
            line: 187,
            column: 2
          }
        },
        line: 185
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 193,
            column: 1
          },
          end: {
            line: 193,
            column: 2
          }
        },
        loc: {
          start: {
            line: 193,
            column: 10
          },
          end: {
            line: 195,
            column: 2
          }
        },
        line: 193
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 36,
            column: 1
          },
          end: {
            line: 36,
            column: 58
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 1
          },
          end: {
            line: 36,
            column: 58
          }
        }, {
          start: {
            line: 36,
            column: 1
          },
          end: {
            line: 36,
            column: 58
          }
        }],
        line: 36
      },
      "1": {
        loc: {
          start: {
            line: 42,
            column: 17
          },
          end: {
            line: 42,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 42,
            column: 17
          },
          end: {
            line: 42,
            column: 34
          }
        }, {
          start: {
            line: 42,
            column: 38
          },
          end: {
            line: 42,
            column: 41
          }
        }],
        line: 42
      },
      "2": {
        loc: {
          start: {
            line: 44,
            column: 20
          },
          end: {
            line: 44,
            column: 82
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 44,
            column: 20
          },
          end: {
            line: 44,
            column: 49
          }
        }, {
          start: {
            line: 44,
            column: 53
          },
          end: {
            line: 44,
            column: 82
          }
        }],
        line: 44
      },
      "3": {
        loc: {
          start: {
            line: 46,
            column: 1
          },
          end: {
            line: 46,
            column: 63
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 46,
            column: 1
          },
          end: {
            line: 46,
            column: 63
          }
        }, {
          start: {
            line: 46,
            column: 1
          },
          end: {
            line: 46,
            column: 63
          }
        }],
        line: 46
      },
      "4": {
        loc: {
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 90,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 90,
            column: 3
          }
        }, {
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 90,
            column: 3
          }
        }],
        line: 84
      },
      "5": {
        loc: {
          start: {
            line: 88,
            column: 9
          },
          end: {
            line: 90,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 9
          },
          end: {
            line: 90,
            column: 3
          }
        }, {
          start: {
            line: 88,
            column: 9
          },
          end: {
            line: 90,
            column: 3
          }
        }],
        line: 88
      },
      "6": {
        loc: {
          start: {
            line: 129,
            column: 18
          },
          end: {
            line: 129,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 129,
            column: 53
          },
          end: {
            line: 129,
            column: 62
          }
        }, {
          start: {
            line: 129,
            column: 65
          },
          end: {
            line: 129,
            column: 79
          }
        }],
        line: 129
      },
      "7": {
        loc: {
          start: {
            line: 165,
            column: 2
          },
          end: {
            line: 173,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 165,
            column: 2
          },
          end: {
            line: 173,
            column: 3
          }
        }, {
          start: {
            line: 165,
            column: 2
          },
          end: {
            line: 173,
            column: 3
          }
        }],
        line: 165
      },
      "8": {
        loc: {
          start: {
            line: 166,
            column: 3
          },
          end: {
            line: 172,
            column: 4
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 166,
            column: 3
          },
          end: {
            line: 172,
            column: 4
          }
        }, {
          start: {
            line: 166,
            column: 3
          },
          end: {
            line: 172,
            column: 4
          }
        }],
        line: 166
      },
      "9": {
        loc: {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        }, {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        }],
        line: 167
      },
      "10": {
        loc: {
          start: {
            line: 170,
            column: 10
          },
          end: {
            line: 172,
            column: 4
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 170,
            column: 10
          },
          end: {
            line: 172,
            column: 4
          }
        }, {
          start: {
            line: 170,
            column: 10
          },
          end: {
            line: 172,
            column: 4
          }
        }],
        line: 170
      },
      "11": {
        loc: {
          start: {
            line: 170,
            column: 16
          },
          end: {
            line: 170,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 170,
            column: 16
          },
          end: {
            line: 170,
            column: 24
          }
        }, {
          start: {
            line: 170,
            column: 28
          },
          end: {
            line: 170,
            column: 44
          }
        }, {
          start: {
            line: 170,
            column: 48
          },
          end: {
            line: 170,
            column: 70
          }
        }],
        line: 170
      },
      "12": {
        loc: {
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        }, {
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        }],
        line: 175
      },
      "13": {
        loc: {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 175,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 175,
            column: 18
          }
        }, {
          start: {
            line: 175,
            column: 22
          },
          end: {
            line: 175,
            column: 57
          }
        }],
        line: 175
      },
      "14": {
        loc: {
          start: {
            line: 176,
            column: 3
          },
          end: {
            line: 176,
            column: 52
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 3
          },
          end: {
            line: 176,
            column: 52
          }
        }, {
          start: {
            line: 176,
            column: 3
          },
          end: {
            line: 176,
            column: 52
          }
        }],
        line: 176
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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


var triggerRegex = (cov_1b0b6g6ip8.s[0]++, /^(-)?([\^+!#]*)(.)$/);
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
  cov_1b0b6g6ip8.f[0]++;
  var match = (cov_1b0b6g6ip8.s[1]++, string.match(triggerRegex));
  cov_1b0b6g6ip8.s[2]++;

  if (!match) {
    cov_1b0b6g6ip8.b[0][0]++;
    cov_1b0b6g6ip8.s[3]++;
    throw new Error('Invalid Hotkey: ' + string);
  } else {
    cov_1b0b6g6ip8.b[0][1]++;
  }

  var _ref = (cov_1b0b6g6ip8.s[4]++, match),
      _ref2 = _slicedToArray(_ref, 4),
      prevent = _ref2[1],
      meta = _ref2[2],
      key = _ref2[3];

  var keyEvent = (cov_1b0b6g6ip8.s[5]++, {});
  var keyName = (cov_1b0b6g6ip8.s[6]++, (cov_1b0b6g6ip8.b[1][0]++, _utils_maps__WEBPACK_IMPORTED_MODULE_0__["stringKeyMap"][key]) || (cov_1b0b6g6ip8.b[1][1]++, key));
  cov_1b0b6g6ip8.s[7]++;
  keyEvent.keyCode = (cov_1b0b6g6ip8.b[2][0]++, _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][keyName.toUpperCase()]) || (cov_1b0b6g6ip8.b[2][1]++, _utils_maps__WEBPACK_IMPORTED_MODULE_0__["keyMap"][keyName.toLowerCase()]);
  cov_1b0b6g6ip8.s[8]++;

  if (!keyEvent.keyCode) {
    cov_1b0b6g6ip8.b[3][0]++;
    cov_1b0b6g6ip8.s[9]++;
    throw new Error('Invalid Key: ' + key);
  } else {
    cov_1b0b6g6ip8.b[3][1]++;
  }

  cov_1b0b6g6ip8.s[10]++;
  Object.keys(_utils_maps__WEBPACK_IMPORTED_MODULE_0__["metaMap"]).forEach(function (metaName) {
    cov_1b0b6g6ip8.f[1]++;
    var metaKey = (cov_1b0b6g6ip8.s[11]++, _utils_maps__WEBPACK_IMPORTED_MODULE_0__["metaMap"][metaName]);
    cov_1b0b6g6ip8.s[12]++;
    keyEvent[metaName] = meta.indexOf(metaKey) > -1;
  });
  cov_1b0b6g6ip8.s[13]++;
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

    cov_1b0b6g6ip8.f[2]++;
    cov_1b0b6g6ip8.s[14]++;

    if (_typeof(_hotkey2) === 'object') {
      cov_1b0b6g6ip8.b[4][0]++;
      cov_1b0b6g6ip8.s[15]++;
      element = _hotkey2.element;
      cov_1b0b6g6ip8.s[16]++;
      callback = _hotkey2.callback;
      cov_1b0b6g6ip8.s[17]++;
      _hotkey2 = _hotkey2.hotkey;
    } else {
      cov_1b0b6g6ip8.b[4][1]++;
      cov_1b0b6g6ip8.s[18]++;

      if (!callback) {
        cov_1b0b6g6ip8.b[5][0]++;
        cov_1b0b6g6ip8.s[19]++;
        callback = element;
      } else {
        cov_1b0b6g6ip8.b[5][1]++;
      }
    }

    cov_1b0b6g6ip8.s[20]++;
    this.callback = callback;
    cov_1b0b6g6ip8.s[21]++;
    this.element = element;
    cov_1b0b6g6ip8.s[22]++;
    this.hotkey = _hotkey2;
    cov_1b0b6g6ip8.s[23]++;
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
      cov_1b0b6g6ip8.f[6]++;
      cov_1b0b6g6ip8.s[28]++;

      _classPrivateFieldSet(this, _enabled, typeof condition !== 'undefined' ? (cov_1b0b6g6ip8.b[6][0]++, condition) : (cov_1b0b6g6ip8.b[6][1]++, !_classPrivateFieldGet(this, _enabled)));
    }
    /**
     * Sets enabled to true, shorthand for Shortcut#toggle(true)
     * @name Shortcut#enable
     */

  }, {
    key: "enable",
    value: function enable() {
      cov_1b0b6g6ip8.f[7]++;
      cov_1b0b6g6ip8.s[29]++;
      this.toggle(true);
    }
    /**
     * Sets enabled to false, shorthand for Shortcut#toggle(false)
     * @name Shortcut#disable
     */

  }, {
    key: "disable",
    value: function disable() {
      cov_1b0b6g6ip8.f[8]++;
      cov_1b0b6g6ip8.s[30]++;
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
      cov_1b0b6g6ip8.f[9]++;
      cov_1b0b6g6ip8.s[31]++;
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
      cov_1b0b6g6ip8.f[10]++;
      var elem = (cov_1b0b6g6ip8.s[32]++, this.element);
      cov_1b0b6g6ip8.s[33]++;

      if (elem) {
        cov_1b0b6g6ip8.b[7][0]++;
        cov_1b0b6g6ip8.s[34]++;

        if (elem instanceof Element) {
          cov_1b0b6g6ip8.b[8][0]++;
          cov_1b0b6g6ip8.s[35]++;

          if (e.target !== elem) {
            cov_1b0b6g6ip8.b[9][0]++;
            cov_1b0b6g6ip8.s[36]++;
            return;
          } else {
            cov_1b0b6g6ip8.b[9][1]++;
          }
        } else {
          cov_1b0b6g6ip8.b[8][1]++;
          cov_1b0b6g6ip8.s[37]++;

          if (!((cov_1b0b6g6ip8.b[11][0]++, e.target) && (cov_1b0b6g6ip8.b[11][1]++, e.target.matches) && (cov_1b0b6g6ip8.b[11][2]++, e.target.matches(elem)))) {
            cov_1b0b6g6ip8.b[10][0]++;
            cov_1b0b6g6ip8.s[38]++;
            return;
          } else {
            cov_1b0b6g6ip8.b[10][1]++;
          }
        }
      } else {
        cov_1b0b6g6ip8.b[7][1]++;
      }

      cov_1b0b6g6ip8.s[39]++;

      if ((cov_1b0b6g6ip8.b[13][0]++, this.enabled) && (cov_1b0b6g6ip8.b[13][1]++, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["objectSearch"])(e, this.data.keyEvent))) {
        cov_1b0b6g6ip8.b[12][0]++;
        cov_1b0b6g6ip8.s[40]++;

        if (this.data.preventDefault) {
          cov_1b0b6g6ip8.b[14][0]++;
          cov_1b0b6g6ip8.s[41]++;
          e.preventDefault();
        } else {
          cov_1b0b6g6ip8.b[14][1]++;
        }

        cov_1b0b6g6ip8.s[42]++;
        this.callback();
      } else {
        cov_1b0b6g6ip8.b[12][1]++;
      }
    }
    /**
     * Bind the event listener
     * @name Shortcut#bind
     */

  }, {
    key: "bind",
    value: function bind() {
      cov_1b0b6g6ip8.f[11]++;
      cov_1b0b6g6ip8.s[43]++;
      document.addEventListener('keydown', this.handleKeyPress);
    }
    /**
     * Unbind the event listener
     * @name Shortcut#unbind
     */

  }, {
    key: "unbind",
    value: function unbind() {
      cov_1b0b6g6ip8.f[12]++;
      cov_1b0b6g6ip8.s[44]++;
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
      cov_1b0b6g6ip8.f[3]++;
      cov_1b0b6g6ip8.s[24]++;
      return _classPrivateFieldGet(this, _hotkey);
    },
    set: function set(string) {
      cov_1b0b6g6ip8.f[4]++;
      cov_1b0b6g6ip8.s[25]++;
      this.data = parseHotkey(string);
      cov_1b0b6g6ip8.s[26]++;

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
      cov_1b0b6g6ip8.f[5]++;
      cov_1b0b6g6ip8.s[27]++;
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
var cov_164iek4duw = function () {
  var path = "C:\\Development\\javascript\\unlockjs\\src\\unlock.js";
  var hash = "64aed28ab5ba52be116d7b5d1aa4fd79be11b5e9";

  var Function = function () {}.constructor;

  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Development\\javascript\\unlockjs\\src\\unlock.js",
    statementMap: {
      "0": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 56,
          column: 13
        }
      },
      "1": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 25
        }
      },
      "2": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 63,
          column: 5
        }
      },
      "3": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 65,
          column: 22
        }
      },
      "4": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 92,
          column: 5
        }
      },
      "5": {
        start: {
          line: 76,
          column: 3
        },
        end: {
          line: 76,
          column: 34
        }
      },
      "6": {
        start: {
          line: 76,
          column: 22
        },
        end: {
          line: 76,
          column: 34
        }
      },
      "7": {
        start: {
          line: 77,
          column: 3
        },
        end: {
          line: 77,
          column: 32
        }
      },
      "8": {
        start: {
          line: 79,
          column: 3
        },
        end: {
          line: 79,
          column: 26
        }
      },
      "9": {
        start: {
          line: 80,
          column: 3
        },
        end: {
          line: 82,
          column: 20
        }
      },
      "10": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 17
        }
      },
      "11": {
        start: {
          line: 84,
          column: 3
        },
        end: {
          line: 87,
          column: 6
        }
      },
      "12": {
        start: {
          line: 85,
          column: 20
        },
        end: {
          line: 85,
          column: 47
        }
      },
      "13": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 51
        }
      },
      "14": {
        start: {
          line: 86,
          column: 38
        },
        end: {
          line: 86,
          column: 51
        }
      },
      "15": {
        start: {
          line: 89,
          column: 3
        },
        end: {
          line: 91,
          column: 6
        }
      },
      "16": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 22
        }
      },
      "17": {
        start: {
          line: 102,
          column: 15
        },
        end: {
          line: 102,
          column: 64
        }
      },
      "18": {
        start: {
          line: 103,
          column: 21
        },
        end: {
          line: 103,
          column: 36
        }
      },
      "19": {
        start: {
          line: 104,
          column: 2
        },
        end: {
          line: 106,
          column: 3
        }
      },
      "20": {
        start: {
          line: 105,
          column: 3
        },
        end: {
          line: 105,
          column: 84
        }
      },
      "21": {
        start: {
          line: 108,
          column: 20
        },
        end: {
          line: 108,
          column: 42
        }
      },
      "22": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 109,
          column: 31
        }
      },
      "23": {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 111,
          column: 19
        }
      },
      "24": {
        start: {
          line: 121,
          column: 19
        },
        end: {
          line: 121,
          column: 40
        }
      },
      "25": {
        start: {
          line: 122,
          column: 2
        },
        end: {
          line: 122,
          column: 33
        }
      },
      "26": {
        start: {
          line: 124,
          column: 2
        },
        end: {
          line: 124,
          column: 18
        }
      },
      "27": {
        start: {
          line: 134,
          column: 2
        },
        end: {
          line: 134,
          column: 49
        }
      },
      "28": {
        start: {
          line: 134,
          column: 32
        },
        end: {
          line: 134,
          column: 47
        }
      },
      "29": {
        start: {
          line: 142,
          column: 2
        },
        end: {
          line: 142,
          column: 28
        }
      },
      "30": {
        start: {
          line: 152,
          column: 2
        },
        end: {
          line: 152,
          column: 23
        }
      },
      "31": {
        start: {
          line: 161,
          column: 2
        },
        end: {
          line: 161,
          column: 80
        }
      },
      "32": {
        start: {
          line: 169,
          column: 2
        },
        end: {
          line: 169,
          column: 20
        }
      },
      "33": {
        start: {
          line: 177,
          column: 2
        },
        end: {
          line: 177,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 52,
            column: 1
          },
          end: {
            line: 52,
            column: 2
          }
        },
        loc: {
          start: {
            line: 52,
            column: 27
          },
          end: {
            line: 66,
            column: 2
          }
        },
        line: 52
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 72,
            column: 1
          },
          end: {
            line: 72,
            column: 2
          }
        },
        loc: {
          start: {
            line: 72,
            column: 16
          },
          end: {
            line: 93,
            column: 2
          }
        },
        line: 72
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 75,
            column: 39
          },
          end: {
            line: 75,
            column: 40
          }
        },
        loc: {
          start: {
            line: 75,
            column: 44
          },
          end: {
            line: 92,
            column: 3
          }
        },
        line: 75
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 80,
            column: 25
          },
          end: {
            line: 80,
            column: 26
          }
        },
        loc: {
          start: {
            line: 80,
            column: 31
          },
          end: {
            line: 82,
            column: 4
          }
        },
        line: 80
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 84,
            column: 24
          },
          end: {
            line: 84,
            column: 25
          }
        },
        loc: {
          start: {
            line: 84,
            column: 33
          },
          end: {
            line: 87,
            column: 4
          }
        },
        line: 84
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 89,
            column: 27
          },
          end: {
            line: 89,
            column: 28
          }
        },
        loc: {
          start: {
            line: 89,
            column: 39
          },
          end: {
            line: 91,
            column: 4
          }
        },
        line: 89
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 101,
            column: 1
          },
          end: {
            line: 101,
            column: 2
          }
        },
        loc: {
          start: {
            line: 101,
            column: 19
          },
          end: {
            line: 112,
            column: 2
          }
        },
        line: 101
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 120,
            column: 1
          },
          end: {
            line: 120,
            column: 2
          }
        },
        loc: {
          start: {
            line: 120,
            column: 22
          },
          end: {
            line: 125,
            column: 2
          }
        },
        line: 120
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 133,
            column: 1
          },
          end: {
            line: 133,
            column: 2
          }
        },
        loc: {
          start: {
            line: 133,
            column: 12
          },
          end: {
            line: 135,
            column: 2
          }
        },
        line: 133
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 134,
            column: 27
          },
          end: {
            line: 134,
            column: 28
          }
        },
        loc: {
          start: {
            line: 134,
            column: 32
          },
          end: {
            line: 134,
            column: 47
          }
        },
        line: 134
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 141,
            column: 1
          },
          end: {
            line: 141,
            column: 2
          }
        },
        loc: {
          start: {
            line: 141,
            column: 9
          },
          end: {
            line: 143,
            column: 2
          }
        },
        line: 141
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 151,
            column: 1
          },
          end: {
            line: 151,
            column: 2
          }
        },
        loc: {
          start: {
            line: 151,
            column: 15
          },
          end: {
            line: 153,
            column: 2
          }
        },
        line: 151
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 160,
            column: 1
          },
          end: {
            line: 160,
            column: 2
          }
        },
        loc: {
          start: {
            line: 160,
            column: 19
          },
          end: {
            line: 162,
            column: 2
          }
        },
        line: 160
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 168,
            column: 1
          },
          end: {
            line: 168,
            column: 2
          }
        },
        loc: {
          start: {
            line: 168,
            column: 10
          },
          end: {
            line: 170,
            column: 2
          }
        },
        line: 168
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 176,
            column: 1
          },
          end: {
            line: 176,
            column: 2
          }
        },
        loc: {
          start: {
            line: 176,
            column: 11
          },
          end: {
            line: 178,
            column: 2
          }
        },
        line: 176
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 52,
            column: 13
          },
          end: {
            line: 52,
            column: 25
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 52,
            column: 23
          },
          end: {
            line: 52,
            column: 25
          }
        }],
        line: 52
      },
      "1": {
        loc: {
          start: {
            line: 54,
            column: 3
          },
          end: {
            line: 54,
            column: 16
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 54,
            column: 13
          },
          end: {
            line: 54,
            column: 16
          }
        }],
        line: 54
      },
      "2": {
        loc: {
          start: {
            line: 55,
            column: 3
          },
          end: {
            line: 55,
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 55,
            column: 18
          },
          end: {
            line: 55,
            column: 23
          }
        }],
        line: 55
      },
      "3": {
        loc: {
          start: {
            line: 76,
            column: 3
          },
          end: {
            line: 76,
            column: 34
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 3
          },
          end: {
            line: 76,
            column: 34
          }
        }, {
          start: {
            line: 76,
            column: 3
          },
          end: {
            line: 76,
            column: 34
          }
        }],
        line: 76
      },
      "4": {
        loc: {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 51
          }
        }, {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 51
          }
        }],
        line: 86
      },
      "5": {
        loc: {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 86,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 86,
            column: 15
          }
        }, {
          start: {
            line: 86,
            column: 19
          },
          end: {
            line: 86,
            column: 36
          }
        }],
        line: 86
      },
      "6": {
        loc: {
          start: {
            line: 102,
            column: 15
          },
          end: {
            line: 102,
            column: 64
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 102,
            column: 45
          },
          end: {
            line: 102,
            column: 52
          }
        }, {
          start: {
            line: 102,
            column: 55
          },
          end: {
            line: 102,
            column: 64
          }
        }],
        line: 102
      },
      "7": {
        loc: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        }, {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        }],
        line: 104
      },
      "8": {
        loc: {
          start: {
            line: 161,
            column: 18
          },
          end: {
            line: 161,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 161,
            column: 53
          },
          end: {
            line: 161,
            column: 62
          }
        }, {
          start: {
            line: 161,
            column: 65
          },
          end: {
            line: 161,
            column: 79
          }
        }],
        line: 161
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_164iek4duw.b[0][0]++, {});

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

    cov_164iek4duw.f[0]++;

    var _ref = (cov_164iek4duw.s[0]++, options),
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === void 0 ? (cov_164iek4duw.b[1][0]++, 500) : _ref$timeout,
        _ref$resetOnMatch = _ref.resetOnMatch,
        resetOnMatch = _ref$resetOnMatch === void 0 ? (cov_164iek4duw.b[2][0]++, false) : _ref$resetOnMatch;

    cov_164iek4duw.s[1]++;
    this.timeout = timeout;
    cov_164iek4duw.s[2]++;
    Object.assign(this, {
      timeout: timeout,
      resetOnMatch: resetOnMatch
    });
    cov_164iek4duw.s[3]++;
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

      cov_164iek4duw.f[1]++;
      var keyTimer;
      cov_164iek4duw.s[4]++;
      document.addEventListener('keydown', function (e) {
        cov_164iek4duw.f[2]++;
        cov_164iek4duw.s[5]++;

        if (!_this.enabled) {
          cov_164iek4duw.b[3][0]++;
          cov_164iek4duw.s[6]++;
          return true;
        } else {
          cov_164iek4duw.b[3][1]++;
        }

        cov_164iek4duw.s[7]++;

        _classPrivateFieldGet(_this, _keyslist).push(e.which);

        cov_164iek4duw.s[8]++;
        clearTimeout(keyTimer);
        cov_164iek4duw.s[9]++;
        keyTimer = setTimeout(function () {
          cov_164iek4duw.f[3]++;
          cov_164iek4duw.s[10]++;

          _this.reset();
        }, _this.timeout);
        cov_164iek4duw.s[11]++;

        _classPrivateFieldGet(_this, _cheats).forEach(function (cheat) {
          cov_164iek4duw.f[4]++;
          var matched = (cov_164iek4duw.s[12]++, cheat.check(_classPrivateFieldGet(_this, _keyslist)));
          cov_164iek4duw.s[13]++;

          if ((cov_164iek4duw.b[5][0]++, matched) && (cov_164iek4duw.b[5][1]++, _this.resetOnMatch)) {
            cov_164iek4duw.b[4][0]++;
            cov_164iek4duw.s[14]++;

            _this.reset();
          } else {
            cov_164iek4duw.b[4][1]++;
          }
        });

        cov_164iek4duw.s[15]++;

        _classPrivateFieldGet(_this, _shortcuts).forEach(function (shortcut) {
          cov_164iek4duw.f[5]++;
          cov_164iek4duw.s[16]++;
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
      cov_164iek4duw.f[6]++;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var name = (cov_164iek4duw.s[17]++, typeof args[0] === 'string' ? (cov_164iek4duw.b[6][0]++, args[0]) : (cov_164iek4duw.b[6][1]++, args.name));
      var foundCheat = (cov_164iek4duw.s[18]++, this.find(name));
      cov_164iek4duw.s[19]++;

      if (foundCheat) {
        cov_164iek4duw.b[7][0]++;
        cov_164iek4duw.s[20]++;
        throw Error('A cheat has already been created with the name ' + foundCheat.name);
      } else {
        cov_164iek4duw.b[7][1]++;
      }

      var cheatCode = (cov_164iek4duw.s[21]++, _construct(_cheatcode__WEBPACK_IMPORTED_MODULE_0__["default"], args));
      cov_164iek4duw.s[22]++;

      _classPrivateFieldGet(this, _cheats).push(cheatCode);

      cov_164iek4duw.s[23]++;
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
      cov_164iek4duw.f[7]++;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var shortcut = (cov_164iek4duw.s[24]++, _construct(_shortcut__WEBPACK_IMPORTED_MODULE_1__["default"], args));
      cov_164iek4duw.s[25]++;

      _classPrivateFieldGet(this, _shortcuts).push(shortcut);

      cov_164iek4duw.s[26]++;
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
      cov_164iek4duw.f[8]++;
      cov_164iek4duw.s[27]++;
      return _classPrivateFieldGet(this, _cheats).find(function (e) {
        cov_164iek4duw.f[9]++;
        cov_164iek4duw.s[28]++;
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
      cov_164iek4duw.f[10]++;
      cov_164iek4duw.s[29]++;
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
      cov_164iek4duw.f[12]++;
      cov_164iek4duw.s[31]++;

      _classPrivateFieldSet(this, _enabled, typeof condition !== 'undefined' ? (cov_164iek4duw.b[8][0]++, condition) : (cov_164iek4duw.b[8][1]++, !_classPrivateFieldGet(this, _enabled)));
    }
    /**
     * Sets enabled to true, shorthand for Unlock#toggle(true)
     * @name Unlock#enable
     */

  }, {
    key: "enable",
    value: function enable() {
      cov_164iek4duw.f[13]++;
      cov_164iek4duw.s[32]++;
      this.toggle(true);
    }
    /**
     * Sets enabled to false, shorthand for Unlock#toggle(false)
     * @name Unlock#disable
     */

  }, {
    key: "disable",
    value: function disable() {
      cov_164iek4duw.f[14]++;
      cov_164iek4duw.s[33]++;
      this.toggle(false);
    }
    /* @alias CheatCode */

  }, {
    key: "enabled",
    get: function get() {
      cov_164iek4duw.f[11]++;
      cov_164iek4duw.s[30]++;
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
var cov_ylabw9lxk = function () {
  var path = "C:\\Development\\javascript\\unlockjs\\src\\utils\\helpers.js";
  var hash = "bb645885f1263f341f316e37b9028f07e665c1db";

  var Function = function () {}.constructor;

  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Development\\javascript\\unlockjs\\src\\utils\\helpers.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 1
        },
        end: {
          line: 8,
          column: 56
        }
      },
      "1": {
        start: {
          line: 8,
          column: 43
        },
        end: {
          line: 8,
          column: 56
        }
      },
      "2": {
        start: {
          line: 9,
          column: 1
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "3": {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 9,
          column: 15
        }
      },
      "4": {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "6": {
        start: {
          line: 11,
          column: 3
        },
        end: {
          line: 11,
          column: 16
        }
      },
      "7": {
        start: {
          line: 14,
          column: 1
        },
        end: {
          line: 14,
          column: 13
        }
      },
      "8": {
        start: {
          line: 24,
          column: 13
        },
        end: {
          line: 24,
          column: 17
        }
      },
      "9": {
        start: {
          line: 25,
          column: 1
        },
        end: {
          line: 29,
          column: 4
        }
      },
      "10": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 28,
          column: 3
        }
      },
      "11": {
        start: {
          line: 27,
          column: 3
        },
        end: {
          line: 27,
          column: 17
        }
      },
      "12": {
        start: {
          line: 31,
          column: 1
        },
        end: {
          line: 31,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "arraysMatch",
        decl: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 7,
            column: 27
          }
        },
        loc: {
          start: {
            line: 7,
            column: 49
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "objectSearch",
        decl: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 28
          }
        },
        loc: {
          start: {
            line: 23,
            column: 47
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 30
          }
        },
        loc: {
          start: {
            line: 25,
            column: 36
          },
          end: {
            line: 29,
            column: 2
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 1
          },
          end: {
            line: 8,
            column: 56
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 1
          },
          end: {
            line: 8,
            column: 56
          }
        }, {
          start: {
            line: 8,
            column: 1
          },
          end: {
            line: 8,
            column: 56
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        }, {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        }],
        line: 26
      },
      "3": {
        loc: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 26,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 26,
            column: 24
          }
        }, {
          start: {
            line: 26,
            column: 28
          },
          end: {
            line: 26,
            column: 57
          }
        }],
        line: 26
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/**
 * Checks if two arrays match exactly
 * @param {Array} firstArr
 * @param {Array} secondArr
 * @returns {boolean}
 */
function arraysMatch(firstArr, secondArr) {
  cov_ylabw9lxk.f[0]++;
  cov_ylabw9lxk.s[0]++;

  //Checks if Array Match - Not My Script
  if (firstArr.length !== secondArr.length) {
    cov_ylabw9lxk.b[0][0]++;
    cov_ylabw9lxk.s[1]++;
    return false;
  } else {
    cov_ylabw9lxk.b[0][1]++;
  } //If Array Lengths Don't Match, Return False


  cov_ylabw9lxk.s[2]++;

  for (var i = (cov_ylabw9lxk.s[3]++, 0), len = (cov_ylabw9lxk.s[4]++, firstArr.length); i < len; i++) {
    cov_ylabw9lxk.s[5]++;

    //Cycle Through Array Contents
    if (firstArr[i] !== secondArr[i]) {
      cov_ylabw9lxk.b[1][0]++;
      cov_ylabw9lxk.s[6]++;
      //Checks if Content in Location Match
      return false; //If They Don't Match, Return False
    } else {
      cov_ylabw9lxk.b[1][1]++;
    }
  }

  cov_ylabw9lxk.s[7]++;
  return true; //If Nothing Doesn't Match, Everything Matches; Therefore, Arrays Match
}
/**
 * Check if one object is fully contained in another
 * @param {Object} haystack - Object to search in
 * @param {Object} needle - Data to search for
 * @returns {boolean}
 */

function objectSearch(haystack, needle) {
  cov_ylabw9lxk.f[1]++;
  var match = (cov_ylabw9lxk.s[8]++, true);
  cov_ylabw9lxk.s[9]++;
  Object.keys(needle).forEach(function (key) {
    cov_ylabw9lxk.f[2]++;
    cov_ylabw9lxk.s[10]++;

    if ((cov_ylabw9lxk.b[3][0]++, !(key in haystack)) || (cov_ylabw9lxk.b[3][1]++, haystack[key] !== needle[key])) {
      cov_ylabw9lxk.b[2][0]++;
      cov_ylabw9lxk.s[11]++;
      match = false;
    } else {
      cov_ylabw9lxk.b[2][1]++;
    }
  });
  cov_ylabw9lxk.s[12]++;
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
var cov_78dxozuog = function () {
  var path = "C:\\Development\\javascript\\unlockjs\\src\\utils\\maps.js";
  var hash = "36bf913a29d19a02ed39615d78fa6cdad6186d25";

  var Function = function () {}.constructor;

  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Development\\javascript\\unlockjs\\src\\utils\\maps.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 44,
          column: 4
        }
      },
      "1": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 26,
          column: 2
        }
      },
      "2": {
        start: {
          line: 28,
          column: 14
        },
        end: {
          line: 28,
          column: 144
        }
      },
      "3": {
        start: {
          line: 30,
          column: 1
        },
        end: {
          line: 33,
          column: 2
        }
      },
      "4": {
        start: {
          line: 30,
          column: 14
        },
        end: {
          line: 30,
          column: 15
        }
      },
      "5": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 25
        }
      },
      "6": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 39
        }
      },
      "7": {
        start: {
          line: 35,
          column: 1
        },
        end: {
          line: 37,
          column: 2
        }
      },
      "8": {
        start: {
          line: 35,
          column: 14
        },
        end: {
          line: 35,
          column: 15
        }
      },
      "9": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 19
        }
      },
      "10": {
        start: {
          line: 39,
          column: 1
        },
        end: {
          line: 41,
          column: 2
        }
      },
      "11": {
        start: {
          line: 39,
          column: 14
        },
        end: {
          line: 39,
          column: 15
        }
      },
      "12": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 27
        }
      },
      "13": {
        start: {
          line: 43,
          column: 1
        },
        end: {
          line: 43,
          column: 13
        }
      },
      "14": {
        start: {
          line: 50,
          column: 28
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "15": {
        start: {
          line: 69,
          column: 23
        },
        end: {
          line: 74,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 5,
            column: 24
          }
        },
        loc: {
          start: {
            line: 5,
            column: 35
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/**
 * @type {Object.<string, number>}
 * Maps key string to numeric keycode value
 */
var keyMap = (cov_78dxozuog.s[0]++, function () {
  cov_78dxozuog.f[0]++;
  var keys = (cov_78dxozuog.s[1]++, {
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
  });
  var alph = (cov_78dxozuog.s[2]++, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  cov_78dxozuog.s[3]++;

  for (var i = (cov_78dxozuog.s[4]++, 0); i < alph.length; i++) {
    cov_78dxozuog.s[5]++;
    keys[alph[i]] = i + 97;
    cov_78dxozuog.s[6]++;
    keys[alph[i].toUpperCase()] = i + 65;
  }

  cov_78dxozuog.s[7]++;

  for (var j = (cov_78dxozuog.s[8]++, 0); j <= 9; j++) {
    cov_78dxozuog.s[9]++;
    keys[j] = j + 48;
  }

  cov_78dxozuog.s[10]++;

  for (var k = (cov_78dxozuog.s[11]++, 0); k <= 9; k++) {
    cov_78dxozuog.s[12]++;
    keys["pad".concat(k)] = k + 96;
  }

  cov_78dxozuog.s[13]++;
  return keys;
}());
/**
 * @type {Object.<char, string>}
 * Maps character to equivalent string
 */

var stringKeyMap = (cov_78dxozuog.s[14]++, {
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
});
/**
 * @type {Object.<string, char>}
 * Maps meta keys to shortcut character
 */

var metaMap = (cov_78dxozuog.s[15]++, {
  'ctrlKey': '^',
  'shiftKey': '+',
  'altKey': '!',
  'metaKey': '#'
});

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
var cov_21v2rzto3q = function () {
  var path = "C:\\Development\\javascript\\unlockjs\\src\\utils\\presets.js";
  var hash = "c580445074f28c0b64919dde565b0d869581213d";

  var Function = function () {}.constructor;

  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Development\\javascript\\unlockjs\\src\\utils\\presets.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 22
        },
        end: {
          line: 13,
          column: 35
        }
      },
      "1": {
        start: {
          line: 21,
          column: 24
        },
        end: {
          line: 21,
          column: 33
        }
      },
      "2": {
        start: {
          line: 29,
          column: 24
        },
        end: {
          line: 29,
          column: 31
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

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
var KONAMI = (cov_21v2rzto3q.s[0]++, 'UUDDLRLRba>');
/**
 * Mortal Kombat Blood Code (A, B, A, C, A, B, B)
 * @name Presets.MK_BLOOD
 * @const
 * @type {string}
 */

var MK_BLOOD = (cov_21v2rzto3q.s[1]++, 'abacabb');
/**
 * DOOM God Mode Code (I, D, D, Q, D)
 * @name Presets.GOD_MODE
 * @const
 * @type {string}
 */

var GOD_MODE = (cov_21v2rzto3q.s[2]++, 'iddqd');

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