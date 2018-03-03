export function press(code, keys, element) {
	const specialKeys = {
		ctrl: keys && keys.indexOf('ctrl') > -1,
		alt: keys && keys.indexOf('alt') > -1,
		shift: keys && keys.indexOf('shift') > -1,
		meta: keys && keys.indexOf('meta') > -1
	};

	const delegate = element || document;

	const evt = new KeyboardEvent('keypress', {
		bubbles: true,
		composed: true,
		charCode: code,
		keyCode: code,
		key: String.fromCharCode(code),
		shiftKey: specialKeys.shift,
		ctrlKey: specialKeys.ctrl,
		altKey: specialKeys.alt,
		metaKey: specialKeys.meta
	});

	delegate.dispatchEvent(evt);
}