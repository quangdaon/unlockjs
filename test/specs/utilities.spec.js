import { keyMap } from '../../src/utils/maps';
import { arraysMatch, objectFulfills } from '../../src/utils/helpers';

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

	describe('arraysMatch Function', () => {
		it('should match empty arrays', () => {
			expect(arraysMatch([], [])).to.equal(true);
		});

		it('should match the same array', () => {
			const array = [1, 2, 3, 4];
			expect(arraysMatch(array, array)).to.equal(true);
		});

		it('should match equal but separate arrays', () => {
			expect(arraysMatch([1, 2, 3], [1, 2, 3])).to.equal(true);
		});

		it('should not match different arrays with the same lengths', () => {
			expect(arraysMatch([1, 2, 3], [1, 2, 4])).to.equal(false);
		});

		it('should not match arrays of different lengths', () => {
			expect(arraysMatch([1, 2, 3], [1, 2])).to.equal(false);
		});

		it('should not match similar arrays that are in different orders', () => {
			expect(arraysMatch([1, 2, 3], [1, 3, 2])).to.equal(false);
		});
	});

	describe('objectFulfills', () => {
		it('should match empty objects', () => {
			expect(objectFulfills({}, {})).to.equal(true);
		});

		it('should match empty object with anything', () => {
			expect(objectFulfills({ prop: 1 }, {})).to.equal(true);
		});

		it('should not match object with empty object', () => {
			expect(objectFulfills({}, { prop: 1 })).to.equal(false);
		});

		it('should match equivalent objects', () => {
			expect(objectFulfills({ prop: 1 }, { prop: 1 })).to.equal(true);
		});

		it('should return true for partial matches', () => {
			expect(objectFulfills({ prop: 1, id: 2 }, { prop: 1 })).to.equal(true);
		});

		it('should only match if values are equal', () => {
			expect(objectFulfills({ prop: 1, id: 2 }, { prop: 2 })).to.equal(false);
		});
	});
});