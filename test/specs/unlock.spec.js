import Unlock from '../../src/unlock';
import CheatCode from '../../src/cheatcode';
import Shortcut from '../../src/shortcut';
import { press } from '../utils/helpers';
import * as presets from '../../src/utils/presets';

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

	it('should expose presets as a static prop', () => {
		expect(Unlock).to.have.property('presets');
		expect(Unlock.Shortcut).to.equal(Shortcut);
	});

	describe('CheatCode integration', () => {
		const unlock = new Unlock();
		const callback = sinon.stub();
		let cheatcode = unlock.addCheat({
			name: 'cheat',
			code: 'bcd',
			callback
		});

		afterEach(() => {
			unlock.reset();
			callback.reset();
		});

		after(() => {
			unlock.reset();
			unlock.disable();
		});

		it('should return cheatcode instance on add', () => {
			expect(cheatcode).to.be.instanceOf(CheatCode);
		});

		it('should bind event listener automatically', () => {
			press(66);
			press(67);
			press(68);

			expect(callback).to.have.been.called;
		});

		it('should error when adding a cheat with a name that exists', () => {
			expect(() => {
				unlock.addCheat('cheat', 'code', callback);
			}).to.throw();
		});

		it('should allow for automatically resetting on cheat success', () => {
			unlock.resetOnMatch = true;
			press(66);
			press(67);
			press(68);

			press(66);
			press(67);
			press(68);

			expect(callback).to.have.been.calledTwice;

			callback.reset();

			unlock.resetOnMatch = false;
			press(66);
			press(67);
			press(68);

			press(66);
			press(67);
			press(68);

			expect(callback).to.have.been.calledOnce;
		});

		describe('.find()', function () {
			it('should return cheat', function () {
				expect(unlock.find('cheat')).to.equal(cheatcode);
			});
		});
	});

	describe('Shortcut integration', function () {
		const unlock = new Unlock();
		const callback = sinon.stub();
		let shortcut = unlock.addShortcut({
			hotkey: '^a',
			callback
		});

		afterEach(() => {
			unlock.reset();
			callback.reset();
		});

		after(() => {
			unlock.reset();
			unlock.disable();
		});

		it('should return shortcut instance on add', () => {
			expect(shortcut).to.be.instanceOf(Shortcut);
		});

		it('should bind event listener automatically', () => {
			press(65, ['ctrl']);

			expect(callback).to.have.been.called;
		});
	});

	describe('Instance', function () {
		const unlock = new Unlock();

		afterEach(() => {
			unlock.reset();
			unlock.enable();
		});

		describe('.enabled', function () {
			it('should be true by default', () => {
				expect(unlock.enabled).to.equal(true);
			});

			it('should prevent cheatcode callback from triggering when false', function () {
				unlock.disable();
				const callback = sinon.stub();

				unlock.addCheat({
					name: 'cheat',
					code: 'abc',
					callback
				});

				press(65);
				press(66);
				press(67);

				expect(callback).to.have.not.been.called;
			});
		});

		describe('.toggle()', function () {
			it('should toggle .enabled', () => {
				unlock.toggle();
				expect(unlock.enabled).to.equal(false);
				unlock.toggle();
				expect(unlock.enabled).to.equal(true);
			});

			it('should accept a condition parameter', () => {
				unlock.toggle(false);
				expect(unlock.enabled).to.equal(false);

				unlock.toggle(true);
				expect(unlock.enabled).to.equal(true);

				unlock.toggle(true);
				expect(unlock.enabled).to.equal(true);
			});
		});

		describe('.enable()', function () {
			it('should only set .enabled to true', () => {
				unlock.enable();
				expect(unlock.enabled).to.equal(true);

				unlock.enable();
				expect(unlock.enabled).to.equal(true);
			});
		});

		describe('.disable()', function () {
			it('should only set .enabled to true', () => {
				unlock.disable();
				expect(unlock.enabled).to.equal(false);

				unlock.disable();
				expect(unlock.enabled).to.equal(false);
			});
		});
	});
});