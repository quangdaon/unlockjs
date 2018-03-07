import Shortcut from '../../src/shortcut';

describe('Shortcut', () => {
	it('should be a class', () => {
		expect(Shortcut).to.be.a('function');
	});

	describe('.parse()', () => {
		it('should return an object', () => {
			expect(Shortcut.parse('a')).to.be.an('object');
		});

		it('should contain keyEvent', () => {
			expect(Shortcut.parse('a')).to.have.property('keyEvent');
		});

		it('should contain preventDefault', () => {
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
				expect(Shortcut.parse('a').keyEvent).to.containSubset({ keyCode: 65 });
			});

			it('should contain have meta key properties', () => {
				expect(Shortcut.parse('a').keyEvent).to.contain.keys('ctrlKey', 'shiftKey', 'altKey', 'metaKey');
			});

			it('should recognize ^ as control', () => {
				expect(Shortcut.parse('^a').keyEvent).to.containSubset({ ctrlKey: true });
			});

			it('should recognize + as shift', () => {
				expect(Shortcut.parse('+a').keyEvent).to.containSubset({ shiftKey: true });
			});

			it('should recognize ! as alt', () => {
				expect(Shortcut.parse('!a').keyEvent).to.containSubset({ altKey: true });
			});

			it('should recognize # as meta', () => {
				expect(Shortcut.parse('#a').keyEvent).to.containSubset({ metaKey: true });
			});

			it('should support multiple metakeys', () => {
				expect(Shortcut.parse('^+a').keyEvent).to.containSubset({ ctrlKey: true, shiftKey: true });
			});

			it('should match exact metaKeys', () => {
				expect(Shortcut.parse('^+a').keyEvent).to.containSubset({
					ctrlKey: true,
					shiftKey: true,
					metaKey: false,
					altKey: false
				});
			});
		});

		describe('.preventDefault', () => {
			it('should be false if trigger does not contain "-"', () => {
				expect(Shortcut.parse('a').preventDefault).to.equal(false);
			});

			it('should be false if meta keys are present without "-"', () => {
				expect(Shortcut.parse('^a').preventDefault).to.equal(false);
			});

			it('should be true if trigger contains "-"', () => {
				expect(Shortcut.parse('-a').preventDefault).to.equal(true);
			});

			it('should be true if meta keys are present with "-"', () => {
				expect(Shortcut.parse('-^a').preventDefault).to.equal(true);
			});
		});

	});
});
