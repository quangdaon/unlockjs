import CheatCode from '../src/cheatcode';

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
		let cheatcode;

		before(() => {
			cheatcode = new CheatCode('cheat', 'abc', () => {
			});
		});

		it('should be creatable', () => {
			expect(cheatcode).to.be.instanceOf(CheatCode);
		});

		it('should parse code automatically', () => {
			expect(cheatcode.code).to.eql([97, 98, 99]);
		});
	});

});