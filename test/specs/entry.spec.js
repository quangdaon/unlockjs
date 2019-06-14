import UnlockFromEntry from '../../src/index';
import UnlockFromMain from '../../src/unlock';

describe('Entry File (index.js)', function() {
	it('should export Unlock class', function () {
		expect(UnlockFromEntry).to.equal(UnlockFromMain);
	})
})