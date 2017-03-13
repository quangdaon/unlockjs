function GameController( initial ) {
	'use strict';

	var _this = this;

	var stats = {
		name: 'No Player',
		lives: 0,
		strength: 0,
		defense: 0,
		magic: 0,
		speed: 0
	};

	var currentlyUpdating = {};

	this.godMode = false;

	function updateStat( id, to, override ) {
		if ( currentlyUpdating[ id ] && !override ) return;
		if ( stats[ id ] > 9000 && to > 9000 ) return alert('IT\'S OVER 9000!!!!');
		currentlyUpdating[ id ] = true;
		if ( typeof to === 'string' ) {
			document.getElementById(id).textContent = to;
			stats[ id ] = to;
			currentlyUpdating[ id ] = false;
			return;
		}

		stats[ id ] += Math.max(-1, Math.min(1, to - stats[ id ]));

		document.getElementById(id).textContent = stats[ id ].toFixed(0);

		if ( stats[ id ] !== to ) {
			setTimeout(function () {
				updateStat(id, to, true);
			}, 10);
		}
		currentlyUpdating[ id ] = false;
	}

	var props = {};

	for ( var stat in stats ) {
		if ( initial[ stat ] ) updateStat(stat, initial[ stat ]);

		//console.log(stat);

		(function ( current ) {
			props[ current ] = {
				get: function () {
					return stats[ current ];
				},
				set: function ( val ) {
					updateStat(current, val);
				}
			};
		})(stat);
	}

	Object.defineProperties(this, props);

	this.attack = function () {
		var amount = (_this.godMode) ? 0.2 : 1;

		updateStat('lives', stats.lives - amount);

		if ( stats.lives <= 0 ) {
			alert('Game Over!');
			window.location.reload();
		}
	};
}

window.onload = function () {
	'use strict';
	var demo = document.querySelector('#demo');

	demo.innerHTML = demo.innerHTML.replace(/<(\/?)script.*?>/g, function ( match, close ) {
		return close ? '</pre>' : '<pre>';
	});

	[].forEach.call(document.querySelectorAll('#demo > pre'), function ( $pre ) {
		var lines = $pre.textContent.split('\n');
		var matches;
		var indentation = (matches = /^\s+/.exec(lines[ 0 ])) != null ? matches[ 0 ] : null;
		if ( !!indentation ) {
			lines = lines.map(function ( line ) {
				return line.replace(indentation, '').replace(/\t/g, '    ');
			});
			$pre.innerHTML = '<code>' + lines.join('\n').trim() + '</code>';
		}
		hljs.highlightBlock($pre.firstChild);
	});

}