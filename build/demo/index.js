function GameController( initial ) {
	'use strict';

	var stats = {
		playername: 'No Player',
		lives: 0,
		strength: 0,
		defense: 0,
		magic: 0,
		speed: 0
	};

	var currentlyUpdating = {};

	for ( var stat in initial ) {
		updateStat(stat, initial[stat]);
	}

	function updateStat( id, to, override ) {
		if ( currentlyUpdating[ id ] && !override ) return;
		currentlyUpdating[ id ] = true;
		if ( typeof to === 'string' ) {
			document.getElementById(id).textContent = to;
			return;
		}
		if ( stats[ id ] < to ) {
			document.getElementById(id).textContent = ++stats[ id ];
			setTimeout(function () {
				updateStat(id, to, true);
			}, 10);
		} else {
			currentlyUpdating[ id ] = false;
		}
	}

	return {
		set name( val ) {
			updateStat('name', val);
		},
		set lives( val ) {
			updateStat('lives', val);
		},
		set strength( val ) {
			updateStat('strength', val);
		},
		set defense( val ) {
			updateStat('defense', val);
		},
		set magic( val ) {
			updateStat('magic', val);
		},
		set speed( val ) {
			updateStat('speed', val);
		}
	};
}