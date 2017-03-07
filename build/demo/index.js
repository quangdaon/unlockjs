(function () {
	var cheat;
	if (typeof Unlock === 'undefined') {
		return document.body.textContent = 'Please run this though Gulp.';
	} else {
		cheat = new Unlock({
			delay: 1000
		});
	}

	cheat.addCheat('konami', ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'], function () {
		alert('Cheater!');
	});

	cheat.addHotkey('-^s', function() {
		alert('Saved!')
	});

	// document.body.textContent = (cheat.find('konami').code());
})();