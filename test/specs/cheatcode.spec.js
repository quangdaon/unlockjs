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

		describe('.code', () => {
			it('should be required', () => {
				delete options.code;
				expect(newInstance).to.throw(Error, 'required');
			});

			it('should be a string or array', () => {
				options.code = {};
				expect(newInstance).to.throw(TypeError, 'Type Mismatch');
			});

			it('should error with invalid input', () => {
				options.code = ['a', 'b', 'farf'];
				expect(newInstance).to.throw(Error, 'Unrecognized key');
			});
		});

		describe('.callback', () => {
			it('should be required', () => {
				delete options.callback;
				expect(newInstance).to.throw(Error, 'required');
			});

			it('should be a function', () => {
				options.callback = 'string';
				expect(newInstance).to.throw(TypeError, 'Type Mismatch');
			});
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

		it('should be created', () => {
			expect(cheatcode).to.be.instanceOf(CheatCode);
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
			beforeEach(() => {
				cheatcode.bind();
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

				setTimeout(() => {
					press(67);
					expect(callback).to.have.not.been.called;
					done();
				}, 600);
			});
		});
	});
});
