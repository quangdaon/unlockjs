import debug from 'debug';
import CheatCode from '../src/cheatcode';
import Shortcut from '../src/shortcut';

if (process.env.NODE_ENV === 'development') debug.enable('unlock:*');

const log = debug('unlock:demo');

//const unlock = new Unlock({ resetOnMatch: true });

const cheat = new CheatCode({
	name: 'name',
	code: 'code',
	callback: () => {
		log('Success!');
	}
});

cheat.bind();
cheat.disable();

log(cheat.code);

new Shortcut('-^b', function () {
	log('B pressed.');
}).bind();