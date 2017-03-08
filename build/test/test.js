(function () {
	'use strict';
	var unlocker = new Unlock({
		delay: 1000
	});

	var data = unlocker._data;

	function press(code, keys, element) {
		var oEvent = document.createEvent('KeyboardEvent');

		var specialKeys = {
			ctrl: keys && keys.indexOf('ctrl') > -1,
			alt: keys && keys.indexOf('alt') > -1,
			shift: keys && keys.indexOf('shift') > -1,
			meta: keys && keys.indexOf('meta') > -1
		}

		var unsupported = false;

		// Chromium Hack: filter this otherwise Safari will complain
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
			Object.defineProperty(oEvent, 'keyCode', {
				get: function () {
					return this.keyCodeVal;
				}
			});
			Object.defineProperty(oEvent, 'which', {
				get: function () {
					return this.keyCodeVal;
				}
			});
		}

		if (oEvent.initKeyboardEvent) {
			oEvent.initKeyboardEvent('keypress', true, true, document.defaultView, specialKeys.ctrl, specialKeys.alt, specialKeys.shift, specialKeys.meta, code, code);
		} else {
			oEvent.initKeyEvent('keypress', true, true, document.defaultView, specialKeys.ctrl, specialKeys.alt, specialKeys.shift, specialKeys.meta, code, 0);
		}

		oEvent.keyCodeVal = code;

		if (oEvent.keyCode !== code) {
			unsupported = true;
		}

		var delegate = element || document.body;

		delegate.dispatchEvent(oEvent);

		return {
			chain: press,
			end: function (err, cb) {
				if (unsupported) {
					return err('Browser does not support manually triggering keypresses.');
				}
				cb && cb();
			}
		};
	}

	describe('Unlock', function () {
		it('is defined', function () {
			expect(Unlock).toBeDefined();
		});

		it('is a function', function () {
			expect(typeof Unlock).toBe('function');
		});

		it('supports CommonJS');
		it('supports AMD');
	});

	describe('new Unlock', function () {
		it('is an object', function () {
			expect(typeof (unlocker)).toBe('object');
		});

		it('matches prototype of parent', function () {
			expect(unlocker.__proto__).toBe(Unlock.prototype);
		});
	});

	describe('KeyMap', function () {
		var km = data.keyMap;

		it('is an object', function () {
			expect(typeof km).toBe('object');
		});

		it('recognizes the [Enter] key', function () {
			expect(km['enter']).toBe(13);
		});

		it('recognizes the [Space] key', function () {
			expect(km['space']).toBe(32);
		});

		it('recognizes the [A] key', function () {
			expect(km['a']).toBe(97);
		});

		it('recognizes the [0] key', function () {
			expect(km['0']).toBe(48);
		});

		it('recognizes the [NumPad 5] key', function () {
			expect(km['pad5']).toBe(101);
		});
	});

	/*** Note: Doesn't care about nested arrays ***/
	describe('arraysMatch Function', function () {
		var arraysMatch = data.arraysMatch;

		it('matches [] and []', function () {
			expect(arraysMatch([], [])).toBe(true);
		});

		it('matches [1, 2, 3] and [1, 2, 3]', function () {
			expect(arraysMatch([1, 2, 3], [1, 2, 3])).toBe(true);
		});

		it('does not match [1, 2, 3] and [1, 2, 4]', function () {
			expect(arraysMatch([1, 2, 3], [1, 2, 4])).toBe(false);
		});

		it('does not match [1, 2, 3] and [1, 2]', function () {
			expect(arraysMatch([1, 2, 3], [1, 2])).toBe(false);
		});

		it('does not match [1, 2, 3] and [1, 3, 2]', function () {
			expect(arraysMatch([1, 2, 3], [1, 3, 2])).toBe(false);
		});
	});

	describe('Cheat code', function () {
		var activated = false;

		var cheatCode;

		beforeEach(function () {
			activated = false;

			cheatCode = unlocker.addCheat({
				name: 'cheat',
				code: ['a', 'b', 'c'],
				callback: function () {
					activated = true;
				}
			});
		});

		afterEach(function () {

			unlocker.reset();

			cheatCode = null;

		});

		it('is not triggered automatically', function () {
			expect(activated).toBe(false);
		});

		it('is returned upon creation', function () {
			cheatCode.disable();
			unlocker.trigger('cheat');

			expect(activated).toBe(false);
		});

		it('triggers on cheat code match', function () {
			press(97).chain(98).chain(99).end(pending, function () {
				expect(activated).toBe(true);
			}); // a, b, c

			activated = false;

			press(97).chain(99).chain(98).end(pending, function () {
				expect(activated).toBe(false);
			}); // a, c, b
		});

		it('resets on timeout', function (done) {
			press(97).chain(99).chain(98).end(pending, function () {
				expect(activated).toBe(false);

				setTimeout(function () {
					press(97).chain(98).chain(99).end(pending, function () {
						expect(activated).toBe(true);

						done();
					}); // a, b, c

				}, 1200);
			}); // a, c, b
		});

		describe('creation', function () {

			var cheatOptions = {};

			beforeEach(function () {
				cheatOptions = {
					name: 'test',
					code: ['a', 'b'],
					callback: function () {
						console.log('Tested!');
					}
				};
			});

			it('accepts an object', function () {
				expect(function () {
					unlocker.addCheat(cheatOptions);
				}).not.toThrow();
			});

			it('accepts individual inputs', function () {
				expect(function () {
					unlocker.addCheat(cheatOptions.name, cheatOptions.code, cheatOptions.callback);
				}).not.toThrow();
			});

			it('works in any order', function () {
				expect(function () {
					unlocker.addCheat(cheatOptions.name, cheatOptions.callback, cheatOptions.code);
				}).not.toThrow();

				expect(function () {
					unlocker.addCheat(cheatOptions.callback, 'test2', cheatOptions.code);
				}).not.toThrow();
			});

			it('is enabled by default', function () {
				expect(unlocker.addCheat(cheatOptions).isEnabled()).toEqual(true);
			});

			describe('name parameter', function () {
				it('cannot be missing', function () {
					expect(function () {
						unlocker.addCheat(cheatOptions.callback, cheatOptions.code);
					}).toThrowError();
				});

				it('must be a string', function () {
					cheatOptions.name = ['name'];
					expect(function () {
						unlocker.addCheat(cheatOptions);
					}).toThrowError();
				});
			});

			describe('callback parameter', function () {
				it('cannot be missing', function () {
					expect(function () {
						unlocker.addCheat(cheatOptions.name, cheatOptions.code);
					}).toThrowError();
				});

				it('must be a function', function () {
					cheatOptions.callback = 'name';
					expect(function () {
						unlocker.addCheat(cheatOptions);
					}).toThrowError();
				});
			});

			describe('code parameter', function () {
				it('cannot be missing', function () {
					expect(function () {
						unlocker.addCheat(cheatOptions.name, cheatOptions.func);
					}).toThrowError();
				});

				it('must be a string or array', function () {
					cheatOptions.code = function () {};
					expect(function () {
						unlocker.addCheat(cheatOptions);
					}).toThrowError();
				});

				it('throws an error on unrecognized keys', function () {
					cheatOptions.code = ['key'];
					expect(function () {
						unlocker.addCheat(cheatOptions).code;
					}).toThrowError();
				});

				it('accepts and expands a string', function () {
					cheatOptions.code = 'UUDDLRLRba>';
					expect(unlocker.addCheat(cheatOptions).code).toEqual([38, 38, 40, 40, 37, 39, 37, 39, 98, 97, 13]);
				});

			});
		});
		describe('can be triggered manually', function () {
			it('using Unlock.trigger(name)', function () {
				unlocker.trigger('cheat');

				expect(activated).toBe(true);
			});

			it('using cheat.trigger()', function () {
				cheatCode.trigger();

				expect(activated).toBe(true);
			});
		});

		describe('can be disabled', function () {
			it('using Unlock.disable(name)', function () {
				unlocker.disable('cheat');
				cheatCode.trigger();

				expect(activated).toBe(false);
			});

			it('using cheat.disable()', function () {
				cheatCode.disable('cheat');
				cheatCode.trigger();

				expect(activated).toBe(false);
			});
		});

		describe('can be toggled', function () {
			it('using Unlock.toggle(name)', function () {
				unlocker.toggle('cheat');
				cheatCode.trigger();

				expect(activated).toBe(false);

				unlocker.toggle('cheat');
				cheatCode.trigger();

				expect(activated).toBe(true);
			});

			it('using cheat.toggle()', function () {
				cheatCode.toggle();
				cheatCode.trigger();

				expect(activated).toBe(false);

				cheatCode.toggle();
				cheatCode.trigger();

				expect(activated).toBe(true);
			});
		});

		describe('setting', function () {
			describe('name', function() {
				it('cannot be updated', function () {
					expect(function () {
						cheatCode.name = 'notTest';
					}).toThrowError();
				});
			});

			describe('callback', function() {
				it('updates correctly', function () {
					cheatCode.callback = function () {
						activated = 'idk';
					};

					cheatCode.trigger();
					expect(activated).toEqual('idk');
				});

				it('rejects invalid', function () {
					expect(function () {
						cheatCode.callback = 'derp';
					}).toThrowError();
				});
			});

			describe('code', function() {
				it('can update using array', function () {
					cheatCode.code = ['c', 'b', 'a'];
					expect(cheatCode.code).toEqual([99, 98, 97]);
				});

				it('can update using string', function () {
					cheatCode.code = '>cba';
					expect(cheatCode.code).toEqual([13, 99, 98, 97]);
				});

				it('rejects invalid', function () {
					expect(function () {
						cheatCode.code = function () {
							return false;
						};
					}).toThrowError();
				});
			});

		});
	});

	describe('Hotkey', function () {
		var activated = false;

		var hotKey;
		var keyOptions;

		beforeEach(function () {
			activated = false;

			keyOptions = {
				trigger: '-^a',
				callback: function () {
					activated = true;
				}
			};

			hotKey = unlocker.addHotkey(keyOptions);
		});

		afterEach(function () {
			unlocker.reset();
			hotKey = null;
		});

		it('is not triggered automatically', function () {
			expect(activated).toBe(false);
		});

		it('is returned upon creation', function () {
			expect(hotKey.trigger).toBe('-^a');
		});

		it('triggers on input match', function () {
			press(97, ['ctrl']).end(pending, function () {
				expect(activated).toBe(true);
			}); // ctrl + a
		});

		describe('creation', function () {
			it('accepts an object');
			it('accepts individual');

			describe('trigger parameter', function () {
				it('cannot be missing', function () {
					expect(function () {
						unlocker.addHotkey({
							callback: keyOptions.callback
						});
					}).toThrowError();
				});

				it('must be string', function () {
					keyOptions.trigger = ['^s'];
					expect(function () {
						unlocker.addHotkey(keyOptions);
					}).toThrowError();
				});

				it('must be in correct format', function () {
					keyOptions.trigger = 'rgkeoigjrtiogvjro';
					expect(function () {
						unlocker.addHotkey(keyOptions);
					}).toThrowError();
				});
			});

			describe('callback parameter', function () {
				it('cannot be missing');
				it('must be a function');
			});

			describe('selector parameter', function () {
				it('accepts a string');
				it('accepts an element');
				it('returns body of not provided');
				it('rejects other types');
			});

		});

		describe('setting', function () {
			describe('trigger', function() {
				it('validates trigger format');
			});

			describe('callback', function() {
				it('must be a function');
			});

			describe('selector', function() {
				it('must be a string or element');
				it('clears previous event handler');
				it('sets new handler');
			});
		});
	});

	describe('Unlock Methods', function () {
		var activated = false;
		var cheat;

		afterEach(function () {
			unlocker.reset();
			activated = false;

			cheat = unlocker.addCheat({
				name: 'mycheat',
				code: 'ab',
				callback: function () {
					activated = true;
				}
			});
		});

		describe('.find()', function () {
			it('can return a cheatcode', function () {
				expect(unlocker.find('mycheat')).toEqual(cheat);
			});
		});

		describe('.reset()', function () {
			it('clears cheats', function () {
				cheat.trigger();
				expect(activated).toBe(true);

				unlocker.reset();

				activated = false;

				cheat.trigger();
				expect(activated).toBe(false);
			});

			it('clears hotkeys');
		});

	});
})();