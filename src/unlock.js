(function () {

	let keyMap = {
		tab: 9,
		up: 38,
		down: 40,
		left: 37,
		right: 39,
		enter: 13,
		space: 32
	};

	(function initKeyMap() {
		const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		for (let i = 0; i < alph.length; i++) {
			keyMap[alph[i]] = i + 65;
		}

		for (let j = 0; j <= 9; j++) {
			keyMap[j] = j + 48;
		}

		for (let k = 0; k <= 9; k++) {
			keyMap[`pad${k}`] = k + 96;
		}

	})();

	function Unlock() {
		/* dev: */
		this._data = {
			keyMap
		};
		/* end-dev */
	}

	if (!window.Unlock) {
		window.Unlock = Unlock;
	} else {
		throw new Error('Unable to instantiate Unlock.js');
	}
})();