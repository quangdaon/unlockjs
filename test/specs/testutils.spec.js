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
			expect(keypressCallback).to.have.been.called;
		});

		it('should trigger the correct key event', () => {
			press(97);
			expect(keypressCallback).to.have.been.calledWith(sinon.match({ keyCode: 97 }));
		});

		it('should accept meta keys', () => {
			press(97, ['meta']);
			expect(keypressCallback).to.have.been.calledWith(sinon.match({ keyCode: 97, metaKey: true }));

			press(97, ['shift']);
			expect(keypressCallback).to.have.been.calledWith(sinon.match({ keyCode: 97, shiftKey: true }));

			press(97, ['ctrl']);
			expect(keypressCallback).to.have.been.calledWith(sinon.match({ keyCode: 97, ctrlKey: true }));

			press(97, ['alt']);
			expect(keypressCallback).to.have.been.calledWith(sinon.match({ keyCode: 97, altKey: true }));
		});

		it('should allow delegation to a specific element', () => {
			const specificKeypressCallback = sinon.stub();

			input.addEventListener('keydown', specificKeypressCallback);

			press(97, null, input);

			expect(specificKeypressCallback).to.have.been.called;
		});

		it('should bubble up to the document', () => {
			press(97, null, input);

			expect(keypressCallback).to.have.been.calledWith(sinon.match({ target: input }));
		});
	});
});