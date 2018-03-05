import { keyMap } from '../src/utils/maps';
import { arraysMatch } from '../src/utils/helpers';

describe('Utilities', () => {
	describe('Key Map', () => {
		it('should be an object', () => {
			expect(keyMap).to.be.a('object');
		});

		it('should recognize the [Enter] key', () => {
			expect(keyMap['enter']).to.equal(13);
		});

		it('should recognize the [Space] key', () => {
			expect(keyMap['space']).to.equal(32);
		});

		it('should recognize the [a] key', () => {
			expect(keyMap['a']).to.equal(97);
		});

		it('should distinguish between lowercase and capital letters', () => {
			expect(keyMap['A']).to.equal(65);
		});

		it('should recognize the [0] key', () => {
			expect(keyMap['0']).to.equal(48);
		});

		it('should recognize the [NumPad 5] key', () => {
			expect(keyMap['pad5']).to.equal(101);
		});
	});

	describe('arraysMatch Function', function () {
		it('should match empty arrays', function () {
			expect(arraysMatch([], [])).to.equal(true);
		});

		it('should match the same array', function () {
			const array = [1, 2, 3, 4];
			expect(arraysMatch(array, array)).to.be.equal(true);
		});

		it('should match equal but separate arrays', function () {
			expect(arraysMatch([1, 2, 3], [1, 2, 3])).to.be.equal(true);
		});

		it('should not match different arrays with the same lengths', function () {
			expect(arraysMatch([1, 2, 3], [1, 2, 4])).to.be.equal(false);
		});

		it('should not match arrays of different lengths', function () {
			expect(arraysMatch([1, 2, 3], [1, 2])).to.be.equal(false);
		});

		it('should not match similar arrays that are in different orders', function () {
			expect(arraysMatch([1, 2, 3], [1, 3, 2])).to.be.equal(false);
		});
	});
});