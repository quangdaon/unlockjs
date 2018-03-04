import CheatCode from '../src/cheatcode';

import debug from 'debug';

if (process.env.NODE_ENV === 'development') debug.enable('unlock:*');

const log = debug('unlock:demo');

const c = new CheatCode({
	name: 'name',
	code: 'code',
	callback: () => {
	}
});

log(c);

c.callback = () => {};