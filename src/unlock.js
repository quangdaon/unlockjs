import debug from 'debug';
import CheatCode from './cheatcode';
import Shortcut from './shortcut';

if (process.env.NODE_ENV === 'development') debug.enable('unlock:*');

export default class Unlock {
	constructor() {

	}

	static get CheatCode() {
		return CheatCode;
	}

	static get Shortcut() {
		return Shortcut;
	}
}