import Shortcut from '../../src/shortcut';
import CheatCode from '../../src/cheatcode';

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

		it('should throw error on multiple keys', () => {
			expect(() => Shortcut.parse('abc')).to.throw(Error, 'Invalid Hotkey');
		});

		it('should throw error on invalid hotkey', () => {
			expect(() => Shortcut.parse('a*')).to.throw(Error, 'Invalid Hotkey');
		});

		it('should throw error on invalid key', () => {
			expect(() => Shortcut.parse('}')).to.throw(Error, 'Invalid Key');
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

	describe('Instantiation', () => {
		let options;

		function newInstance() {
			return new Shortcut(options);
		}

		beforeEach(() => {
			options = {
				trigger: 'a',
				callback: () => null
			};
		});

		describe('.trigger', () => {
			it('should be required', () => {
				delete options.trigger;
				expect(newInstance).to.throw(Error, 'required');
			});

			it('should be string', () => {
				options.trigger = [];
				expect(newInstance).to.throw(Error, 'Type Mismatch');
			});
		});
	});

	describe('Instance', () => {
		const callback = sinon.stub();
		let shortcut;

		beforeEach(() => {
			callback.reset();
			shortcut = new Shortcut('a', callback);
		});

		it('should be created', () => {
			expect(shortcut).to.be.instanceOf(Shortcut);
		});

		describe('.trigger', () => {
			it('should return trigger', () => {
				expect(shortcut.trigger).to.equal('a');
			});

			it('should parse trigger', () => {
				expect(shortcut.data).to.containSubset({ keyEvent: { keyCode: 65 } });
			});

			it('should writable', () => {
				shortcut.trigger = '^b';
				expect(shortcut.trigger).to.equal('^b');
			});

			it('should parse data on write', () => {
				shortcut.trigger = '^b';
				expect(shortcut.data).to.containSubset({ keyEvent: { keyCode: 66, ctrlKey: true } });
			});
		});

		describe('.callback', () => {

		});
	});
});
