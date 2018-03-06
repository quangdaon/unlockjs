import Shortcut from '../../src/shortcut';

describe('Shortcut', () => {
	it('should be a class', () => {
		expect(Shortcut).to.be.a('function');
	});

	describe('.parse()', () => {
		it('should return an object', () => {
			expect(Shortcut.parse('a')).to.be.an('object');
		});

		it('should return keyEvent', () => {
			expect(Shortcut.parse('a')).to.have.property('keyEvent');
		});

		it('should return preventDefault', () => {
			expect(Shortcut.parse('a')).to.have.property('preventDefault');
		});

		it('should throw error on invalid key', () => {
			expect(() => Shortcut.parse('}')).to.throw();
		});

		it('should throw error on multiple keys', () => {
			expect(() => Shortcut.parse('abc')).to.throw();
		});

		it('should throw error on invalid hotkey', () => {
			expect(() => Shortcut.parse('a*')).to.throw();
		});

		describe('.keyEvent', () => {
			it('should contain keyCode', () => {
				expect(Shortcut.parse('a').keyEvent).to.eql({ keyCode: 65 });
			});

			it('should recognize ^ as control', () => {
				expect(Shortcut.parse('^a').keyEvent).to.eql({ keyCode: 65, ctrlKey: true });
			});

			it('should recognize + as shift', () => {
				expect(Shortcut.parse('+a').keyEvent).to.eql({ keyCode: 65, shiftKey: true });
			});

			it('should recognize ! as alt', () => {
				expect(Shortcut.parse('!a').keyEvent).to.eql({ keyCode: 65, altKey: true });
			});

			it('should recognize # as meta', () => {
				expect(Shortcut.parse('#a').keyEvent).to.eql({ keyCode: 65, metaKey: true });
			});

			it('should support multiple metakeys', () => {
				expect(Shortcut.parse('^+a').keyEvent).to.eql({ keyCode: 65, ctrlKey: true, shiftKey: true });
			});
		});
	});
});