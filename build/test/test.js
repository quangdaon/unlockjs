(function() {
	'use strict';
	var unlocker = new Unlock;

	describe('Unlock', function() {
		it('is a function', function() {
			expect(typeof Unlock).toBe('function');
		});

	});

	describe('new Unlock', function() {
		it('is an object', function() {
			expect(typeof (unlocker)).toBe('object');
		});
		it('matches prototype of parent', function() {
			expect(unlocker.__proto__).toBe(Unlock.prototype);
		});
	});

	describe('KeyMap', function() {
		var km = unlocker._data.keyMap;

		it('is an object', function() {
			expect(typeof km).toBe('object');
		});

		it('and recognizes the [Enter] key', function() {
			expect(km['enter']).toBe(13);
		});

		it('and recognizes the [Space] key', function() {
			expect(km['space']).toBe(32);
		});

		it('and recognizes the [A] key', function() {
			expect(km['a']).toBe(65);
		});

		it('and recognizes the [0] key', function() {
			expect(km['0']).toBe(48);
		});

		it('and recognizes the [NumPad 5] key', function() {
			expect(km['pad5']).toBe(101);
		});
	});
})();