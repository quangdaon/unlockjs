import Unlock from '../src/unlock';
import CheatCode from '../src/cheatcode';
import Shortcut from '../src/shortcut';

describe('Unlock', () => {
	it('should be a class', () => {
		expect(Unlock).to.be.a('function');
	});

	it('should expose CheatCode as a static prop', () => {
		expect(Unlock).to.have.property('CheatCode');
		expect(Unlock.CheatCode).to.equal(CheatCode);
	});

	it('should expose Shortcut as a static prop', () => {
		expect(Unlock).to.have.property('Shortcut');
		expect(Unlock.Shortcut).to.equal(CheatCode);
	});

	describe('CheatCode', () => {
		it('should be a class', () => {
			expect(Unlock.CheatCode).to.be.a('function');
		});
	});

	describe('Shortcut', () => {
		it('should be a class', () => {
			expect(Unlock.Shortcut).to.be.a('function');
		});
	});
});
