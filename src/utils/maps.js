export const keyMap = (function () {
	const keys = {
		tab: 9,
		up: 38,
		down: 40,
		left: 37,
		right: 39,
		enter: 13,
		space: 32,
		' ': 32,
		shift: 16,
		ctrl: 17,
		alt: 18,
		win: 91,
		backspace: 8,
		capsLock: 20,
		',': 188,
		'.': 190,
		'/': 191,
		'\\': 220,
		esc: 27
	};

	const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	for (let i = 0; i < alph.length; i++) {
		keys[alph[i]] = i + 97;
		keys[alph[i].toUpperCase()] = i + 65;
	}

	for (let j = 0; j <= 9; j++) {
		keys[j] = j + 48;
	}

	for (let k = 0; k <= 9; k++) {
		keys[`pad${k}`] = k + 96;
	}

	return keys;
})();

export const stringKeyMap = {
	U: 'up',
	D: 'down',
	L: 'left',
	R: 'right',
	X: 'esc',
	'_': 'tab',
	'^': 'ctrl',
	'+': 'shift',
	'!': 'alt',
	'#': 'win',
	'<': 'backspace',
	'>': 'enter'
};

export const metaMap = {
	'ctrlKey': '^',
	'shiftKey': '+',
	'altKey': '!',
	'metaKey': '#'
};