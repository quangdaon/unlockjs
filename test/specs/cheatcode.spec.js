import CheatCode from '../../src/cheatcode';
import { press } from '../utils/helpers';

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
				code: {},
				callback: () => {}
			})).to.throw();
		});

		it('should error with invalid input', () => {
			expect(() => new CheatCode({
				name: 'name',
				code: ['a', 'b', 'farf'],
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

		describe('Native Behavior', () => {
			it('should return name and code on JSON.stringify', () => {
				expect(JSON.stringify(cheatcode)).to.equal(JSON.stringify({ name: 'cheat', code: [65, 66, 67] }));
			});

			it('should return name when called as a string', () => {
				expect(cheatcode.toString()).to.equal('cheat');
				expect(cheatcode.toString() + 'abcd').to.equal('cheatabcd');
			});
		});
	});

	describe('static helpers', () => {
		describe('.compile', () => {
			it('should convert a string into a numeric array', () => {
				expect(CheatCode.compile('abcd')).to.eql([65, 66, 67, 68]);
			});

			it('should convert a string array into a numeric array', () => {
				expect(CheatCode.compile(['a', 'b', 'd'])).to.eql([65, 66, 68]);
			});

			it('should error with invalid input', () => {
				expect(() => CheatCode.compile(['a', 'b', 'farf'])).to.throw();
			});
		});
	});

});