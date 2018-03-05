import CheatCode from '../src/cheatcode';
import { press } from './utils/helpers';

describe('CheatCode', () => {
	it('should be a class', () => {
		expect(CheatCode).to.be.a('function');
	});

	describe('.code', () => {
		it('should be passed', () => {
			expect(() => new CheatCode({
				name: 'name',
				code: 'code'
			})).to.throw();
		});

		it('should be a string or array', () => {
			expect(() => new CheatCode({
				name: 'name',
				code: 'code',
				callback: {}
			})).to.throw();
		});
	});

	describe('.callback', () => {
		it('should be passed', () => {
			expect(() => new CheatCode({
				name: 'name',
				code: 'code'
			})).to.throw();
		});

		it('should be a function', () => {
			expect(() => new CheatCode({
				name: 'name',
				code: 'code',
				callback: 'string'
			})).to.throw();
		});
	});

	describe('CheatCode instance', () => {
		const callback = sinon.stub();
		const cheatcode = new CheatCode('cheat', 'abc', callback);

		beforeEach(() => {
			cheatcode.reset();
			cheatcode.unbind();
			callback.reset();
		});

		it('should be created', () => {
			expect(cheatcode).to.be.instanceOf(CheatCode);
		});

		it('should parse code automatically', () => {
			expect(cheatcode.code).to.eql([65, 66, 67]);
		});

		it('should not trigger callback automatically', function () {
			assert(callback.notCalled);
		});

		it('should not trigger callback on key pressed', () => {
			press(65);
			press(66);
			press(67);
			assert(callback.notCalled);
		});

		it('should trigger callback on key pressed if bound', () => {
			cheatcode.bind();
			press(65);
			press(66);
			press(67);
			assert(callback.called);
		});

		it('should be unbindable', done => {
			cheatcode.bind();
			press(65);
			press(66);
			press(67);
			assert(callback.called);

			callback.reset();

			setTimeout(() => {
				cheatcode.unbind();
				press(65);
				press(66);
				press(67);
				assert(callback.notCalled);
				done();
			}, 600);
		});

		it('should reset on timeout', done => {
			cheatcode.bind();
			press(65);
			press(66);

			setTimeout(() => {
				press(67);
				assert(callback.notCalled);
				done();
			}, 600);
		});
	});

});