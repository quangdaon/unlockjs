import CheatCode from '../../src/cheatcode';
import { press } from '../utils/helpers';

describe('CheatCode', () => {
	it('should be a class', () => {
		expect(CheatCode).to.be.a('function');
	});

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

	describe('Instantiation', () => {
		let options;

		function newInstance() {
			return new CheatCode(options);
		}

		beforeEach(() => {
			options = {
				name: 'name',
				code: 'code',
				callback: () => {
				}
			};
		});

		it('should accept options object', () => {
			expect(newInstance()).to.be.instanceOf(CheatCode);
		});

		it('should accept signature of (string, string, function)', () => {
			expect(new CheatCode('name', 'code', () => {
			})).to.be.instanceOf(CheatCode);
		});

		describe('.code', () => {
			it('should error with invalid input', () => {
				options.code = ['a', 'b', 'farf'];
				expect(newInstance).to.throw(Error, 'Unrecognized key');
			});
		});

		xdescribe('.callback', () => {
		});
	});

	describe('Instance', () => {
		const callback = sinon.stub();
		let cheatcode;

		beforeEach(() => {
			cheatcode = new CheatCode('cheat', 'abc', callback);
			callback.reset();
		});

		afterEach(() => {
			cheatcode.reset();
			cheatcode.unbind();
		});

		it('should parse code automatically', () => {
			expect(cheatcode.code).to.eql([65, 66, 67]);
		});

		it('should not trigger callback automatically', function () {
			expect(callback).to.have.not.been.called;
		});

		it('should not trigger callback on key pressed', () => {
			press(65);
			press(66);
			press(67);
			expect(callback).to.have.not.been.called;
		});

		it('should trigger callback on key pressed if bound', () => {
			cheatcode.bind();
			press(65);
			press(66);
			press(67);
			expect(callback).to.have.been.called;
		});

		it('should return name and code on JSON.stringify', () => {
			expect(JSON.stringify(cheatcode)).to.equal(JSON.stringify({ name: 'cheat', code: [65, 66, 67] }));
		});

		it('should return name when called as a string', () => {
			expect(cheatcode.toString()).to.equal('cheat');
			expect(cheatcode + 'abcd').to.equal('cheatabcd');
		});

		describe('after bound', () => {
			const clock = sinon.useFakeTimers();

			beforeEach(() => {
				cheatcode.bind();
			});

			after(() => {
				clock.restore();
			});

			it('should be unbindable', done => {
				cheatcode.unbind();
				press(65);
				press(66);
				press(67);
				expect(callback).to.have.not.been.called;
				done();
			});

			it('should reset on timeout', done => {
				press(65);
				press(66);

				clock.tick(510);

				press(67);
				expect(callback).to.have.not.been.called;
				done();
			});
		});
	});
});
