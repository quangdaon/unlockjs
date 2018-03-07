import { press } from '../utils/helpers';

// Testing the test utilities. So meta.
describe('Test Utilities', () => {
	describe('press()', () => {
		const keypressCallback = sinon.stub();
		const input = document.createElement('input');

		before(() => {
			document.addEventListener('keydown', keypressCallback);
		});

		beforeEach(() => {
			document.body.appendChild(input);
		});

		afterEach(() => {
			keypressCallback.reset();
			input.remove();
		});

		it('should trigger a keypress event', () => {
			press(97);
			assert(keypressCallback.called);
		});

		it('should trigger the correct key event', () => {
			press(97);
			assert(keypressCallback.calledWith(sinon.match({ keyCode: 97 })));
		});

		it('should accept meta keys', () => {
			press(97, ['meta']);
			assert(keypressCallback.calledWith(sinon.match({ keyCode: 97, metaKey: true })));

			press(97, ['shift']);
			assert(keypressCallback.calledWith(sinon.match({ keyCode: 97, shiftKey: true })));

			press(97, ['ctrl']);
			assert(keypressCallback.calledWith(sinon.match({ keyCode: 97, ctrlKey: true })));

			press(97, ['alt']);
			assert(keypressCallback.calledWith(sinon.match({ keyCode: 97, altKey: true })));
		});

		it('should allow delegation to a specific element', () => {
			const specificKeypressCallback = sinon.stub();

			input.addEventListener('keydown', specificKeypressCallback);

			press(97, null, input);

			assert(specificKeypressCallback.called);
		});

		it('should bubble up to the document', () => {
			press(97, null, input);

			assert(keypressCallback.calledWith(sinon.match({ target: input })));
		});
	});
});