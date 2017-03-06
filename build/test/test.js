(function () {
	'use strict';
	var unlocker = new Unlock;

	var data = unlocker._data

	describe('Unlock', function () {
		it('is defined', function () {
			expect(Unlock).toBeDefined();
		})
		it('is a function', function () {
			expect(typeof Unlock).toBe('function');
		});

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
			expect(km['a']).toBe(65);
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

	describe('Adding new cheat', function () {

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

		afterEach(function () {
			unlocker.reset();
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
			expect(unlocker.addCheat(cheatOptions)).toEqual(jasmine.objectContaining({
				enabled: true
			}));
		});

		describe('name parameter', function () {
			it('cannot be missing', function () {
				expect(function () {
					unlocker.addCheat(cheatOptions.callback, cheatOptions.code);
				}).toThrowError();
			});

			it('must be a string', function () {
				cheatOptions.name = ['name']
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

			it('throws an error on unrecognized keys', function () {
				cheatOptions.code = ['key'];
				expect(function () {
					unlocker.addCheat(cheatOptions);
				}).toThrowError();
			});

			it('accepts and expands a string', function () {
				cheatOptions.code = 'UUDDLRLRba>';
				expect(unlocker.addCheat(cheatOptions)).toEqual(jasmine.objectContaining({
					code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
				}));
			});
		});
	});

	describe('Cheat code', function () {
		var activated = false;

		var cheatCode;

		beforeEach(function () {
			cheatCode = unlocker.addCheat({
				name: 'cheat',
				code: ['a', 'b', 'c'],
				callback: function () {
					activated = true;
				}
			});
		});

		afterEach(function () {
			activated = false;

			unlocker.reset();

		});

		it('is not triggered automatically', function () {
			expect(activated).toBe(false);
		});

		it('is returned upon creation', function () {
			cheatCode.enabled = false;
			unlocker.trigger('cheat');

			expect(activated).toBe(false);
		});

		it('can be retrieved using .find()', function () {
			expect(unlocker.find('cheat')).toEqual(cheatCode);
		});

		it('triggers on cheat code match', function () {
			pending('Not sure how to simulate keystrokes.');
			expect(activated).toBe(true);
		});

		it('can be triggered manually', function () {
			unlocker.trigger('cheat');

			expect(activated).toBe(true);
		});

		it('can be disabled', function () {
			unlocker.disable('cheat');
			unlocker.trigger('cheat');

			expect(activated).toBe(false);
		});
	});
})();