import { keyMap } from '../../src/utils/maps';
import { arraysMatch, objectSearch } from '../../src/utils/helpers';

describe('Utilities', () => {
	describe('keyMap', () => {
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

	describe('arraysMatch()', () => {
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

	describe('objectSearch()', () => {
		it('should match empty objects', () => {
			expect(objectSearch({}, {})).to.equal(true);
		});

		it('should match empty object with anything', () => {
			expect(objectSearch({ prop: 1 }, {})).to.equal(true);
		});

		it('should not match object with empty object', () => {
			expect(objectSearch({}, { prop: 1 })).to.equal(false);
		});

		it('should match equivalent objects', () => {
			expect(objectSearch({ prop: 1 }, { prop: 1 })).to.equal(true);
		});

		it('should return true for partial matches', () => {
			expect(objectSearch({ prop: 1, id: 2 }, { prop: 1 })).to.equal(true);
		});

		it('should only match if values are equal', () => {
			expect(objectSearch({ prop: 1, id: 2 }, { prop: 2 })).to.equal(false);
		});

		it('should only match if first object contains all values of second object', () => {
			expect(objectSearch({ prop: 1, id: 2, key: 5 }, { prop: 1, key: 5 })).to.equal(true);
		});

		it('should not match if any key doesn\'t match', () => {
			expect(objectSearch({ prop: 1, id: 2, key: 5 }, { prop: 1, car: 5 })).to.equal(false);
		});

		it('should not match if any value doesn\'t match', () => {
			expect(objectSearch({ prop: 1, id: 2, key: 5 }, { prop: 1, key: 6 })).to.equal(false);
		});

		it('should match falsy values', () => {
			expect(objectSearch({ prop: false, id: 2, key: 5 }, { prop: false })).to.equal(true);
		});

		it('should not match unequal falsy values', () => {
			expect(objectSearch({ prop: false }, { prop: 0 })).to.equal(false);
		});
	});
});