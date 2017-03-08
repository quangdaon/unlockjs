(function () {
	var cheat = new Unlock({
		delay: 1000
	});

	var cheatCode = cheat.addCheat('konami', ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'], function () {
		alert('Cheater!');
	});

	var hotKey = cheat.addHotkey('-^s', 'textarea', function () {
		alert('Saved!');
	});
})();