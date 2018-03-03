import { keyMap } from '../src/utils/maps';

describe('Utils', () => {
	describe('Key Map', () => {
		it('should be an object', function () {
			expect(keyMap).to.be.a('object');
		});

		it('should recognize the [Enter] key', function () {
			expect(keyMap['enter']).to.equal(13);
		});

		it('should recognize the [Space] key', function () {
			expect(keyMap['space']).to.equal(32);
		});

		it('should recognize the [A] key', function () {
			expect(keyMap['a']).to.equal(97);
		});

		it('should recognize the [0] key', function () {
			expect(keyMap['0']).to.equal(48);
		});

		it('should recognize the [NumPad 5] key', function () {
			expect(keyMap['pad5']).to.equal(101);
		});
	});
});