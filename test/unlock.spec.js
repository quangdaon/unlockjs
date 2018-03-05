import Unlock from '../src/unlock';
import CheatCode from '../src/cheatcode';
import Shortcut from '../src/shortcut';
import { press } from './utils/helpers';

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
		expect(Unlock.Shortcut).to.equal(Shortcut);
	});

	describe('CheatCode integration', () => {
		const unlock = new Unlock();
		const callback = sinon.stub();
		let cheatcode = unlock.addCheat({
			name: 'cheat',
			code: 'abc',
			callback
		});

		beforeEach(() => {
			unlock.reset();
			callback.reset();
		});

		it('should return cheatcode instance on add', () => {
			expect(cheatcode).to.be.instanceOf(CheatCode);
		});

		it('should bind event listener automatically', () => {
			press(65);
			press(66);
			press(67);

			console.log(unlock.keyslist);

			assert(callback.called);
		});
	});
});