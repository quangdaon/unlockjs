import Shortcut from '../../src/shortcut';
import { press } from '../utils/helpers';

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
			it('should be false if hotkey does not contain "-"', () => {
				expect(Shortcut.parse('a').preventDefault).to.equal(false);
			});

			it('should be false if meta keys are present without "-"', () => {
				expect(Shortcut.parse('^a').preventDefault).to.equal(false);
			});

			it('should be true if hotkey contains "-"', () => {
				expect(Shortcut.parse('-a').preventDefault).to.equal(true);
			});

			it('should be true if meta keys are present with "-"', () => {
				expect(Shortcut.parse('-^a').preventDefault).to.equal(true);
			});
		});

	});

	describe('Instantiation', () => {
		it('should accept options object', () => {
			const shortcut = new Shortcut({
				hotkey: 'a',
				callback: () => null
			});

			expect(shortcut).to.be.instanceOf(Shortcut);
			expect(shortcut.hotkey).to.equal('a');
			expect(shortcut.callback).to.be.a('function');
		});

		it('should accept signature of (hotkey: string, callback: function)', () => {
			const shortcut = new Shortcut('a', () => {
			});

			expect(shortcut).to.be.instanceOf(Shortcut);
			expect(shortcut.hotkey).to.equal('a');
			expect(shortcut.callback).to.be.a('function');
		});

		it('should accept signature of (hotkey: string, selector: string, callback: function)', () => {
			let shortcut = new Shortcut('a', '.elem', () => {
			});

			expect(shortcut).to.be.instanceOf(Shortcut);
			expect(shortcut.hotkey).to.equal('a');
			expect(shortcut.element).to.equal('.elem');
			expect(shortcut.callback).to.be.a('function');
		});

		it('should accept signature of (hotkey: string, element: Element, callback: function)', () => {
			const input = document.createElement('input');
			let shortcut = new Shortcut('a', input, () => {
			});

			expect(shortcut).to.be.instanceOf(Shortcut);
			expect(shortcut.hotkey).to.equal('a');
			expect(shortcut.element).to.equal(input);
			expect(shortcut.callback).to.be.a('function');
		});
	});

	describe('Instance', () => {
		const callback = sinon.stub();
		let shortcut;

		beforeEach(() => {
			shortcut = new Shortcut({ hotkey: 'a', callback });
			callback.reset();
		});

		afterEach(() => {
			//shortcut.reset();
			shortcut.unbind();
		});

		describe('.hotkey', () => {
			it('should return hotkey', () => {
				expect(shortcut.hotkey).to.equal('a');
			});

			it('should parse hotkey', () => {
				expect(shortcut.data).to.containSubset({ keyEvent: { keyCode: 65 } });
			});

			it('should be writable', () => {
				shortcut.hotkey = '^b';
				expect(shortcut.hotkey).to.equal('^b');
			});

			it('should parse data on write', () => {
				shortcut.hotkey = '^b';
				expect(shortcut.data).to.containSubset({ keyEvent: { keyCode: 66, ctrlKey: true } });
			});
		});

		describe('.callback', () => {
			it('should not be called automatically', () => {
				expect(callback).to.have.not.been.called;
			});
		});

		describe('Key Press Handler', () => {
			const preventDefaultCalled = sinon.stub();

			// TODO: Look into a better way of doing this.
			function preventDefaultChecker(e) {
				e.preventDefault = preventDefaultCalled;
			}

			beforeEach(() => {
				preventDefaultCalled.reset();
			});

			before(() => {
				document.addEventListener('keydown', preventDefaultChecker);
			});

			after(() => {
				document.removeEventListener('keydown', preventDefaultChecker);
			});

			it('should not run on key pressed', () => {
				press(65);
				expect(callback).to.have.not.been.called;
			});

			it('should run on key pressed if bound', () => {
				shortcut.bind();
				press(65);
				expect(callback).to.have.been.called;
			});

			it('should be bound to element if selector provided', () => {
				const input = document.createElement('input');
				input.id = 'testInput';
				document.body.appendChild(input);

				shortcut.bind();
				shortcut.element = '#testInput';

				press(65);
				expect(callback).to.not.have.been.called;

				press(65, null, input);
				expect(callback).to.have.been.called;

				input.remove();
			});

			it('should be bound to element if specific element provided', () => {
				const input = document.createElement('input');
				const input2 = document.createElement('input');
				document.body.appendChild(input);
				document.body.appendChild(input2);

				shortcut.bind();
				shortcut.element = input;

				press(65);
				expect(callback).to.not.have.been.called;

				press(65, null, input2);
				expect(callback).to.not.have.been.called;

				press(65, null, input);
				expect(callback).to.have.been.called;

				input.remove();
				input2.remove();
			});

			it('should prevent default if hotkey starts with "-"', () => {
				shortcut.hotkey = '-a';
				shortcut.bind();
				press(65);
				expect(preventDefaultCalled).to.have.been.called;
			});

			describe('after bound', () => {

				beforeEach(() => {
					shortcut.bind();
				});

				it('should be unbindable', () => {
					shortcut.unbind();
					press(65);

					expect(callback).to.have.not.been.called;
				});

				it('should not match random key press', () => {
					press(95);
					expect(callback).to.have.not.been.called;
				});

				it('should match ctrl key', () => {
					press(65, ['ctrl']);
					expect(callback).to.have.not.been.called;

					shortcut.hotkey = '^a';
					press(65);
					expect(callback).to.have.not.been.called;

					press(65, ['ctrl']);
					expect(callback).to.have.been.called;
				});
			});
		});

		describe('.enabled', function () {
			before(() => {
				shortcut.bind();
			});

			after(() => {
				shortcut.unbind();
			});

			it('should be true by default', () => {
				expect(shortcut.enabled).to.equal(true);
			});

			it('should prevent callback from triggering when false', function () {
				shortcut.disable();
				press(65);
				expect(callback).to.have.not.been.called;
			});
		});

		describe('.toggle()', function () {
			it('should toggle .enabled', () => {
				shortcut.toggle();
				expect(shortcut.enabled).to.equal(false);
				shortcut.toggle();
				expect(shortcut.enabled).to.equal(true);
			});

			it('should accept a condition parameter', () => {
				shortcut.toggle(false);
				expect(shortcut.enabled).to.equal(false);

				shortcut.toggle(true);
				expect(shortcut.enabled).to.equal(true);

				shortcut.toggle(true);
				expect(shortcut.enabled).to.equal(true);
			});
		});

		describe('.enable()', function () {
			it('should only set .enabled to true', () => {
				shortcut.enable();
				expect(shortcut.enabled).to.equal(true);

				shortcut.enable();
				expect(shortcut.enabled).to.equal(true);
			});
		});

		describe('.disable()', function () {
			it('should only set .enabled to true', () => {
				shortcut.disable();
				expect(shortcut.enabled).to.equal(false);

				shortcut.disable();
				expect(shortcut.enabled).to.equal(false);
			});
		});
	});
});
