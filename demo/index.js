import debug from 'debug';
import Unlock from '../src/unlock';

if (process.env.NODE_ENV === 'development') debug.enable('unlock:*');

const log = debug('unlock:demo');

const unlock = new Unlock({ resetOnMatch: true });

unlock.addCheat({
	name: 'name',
	code: 'code',
	callback: () => {
		log('Success!');
	}
});