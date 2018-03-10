export function press(code, keys, element) {
	const delegate = element || document;

	let evtOptions = {
		bubbles: true,
		composed: true,
		charCode: code,
		keyCode: code,
		which: code,
		key: String.fromCharCode(code)
	};

	if (keys) {
		keys.forEach(k => {
			evtOptions[k + 'Key'] = true;
		});
	}

	const evt = new KeyboardEvent('keydown', evtOptions);
	delegate.dispatchEvent(evt);
}