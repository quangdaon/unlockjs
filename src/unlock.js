import debug from 'debug';
import CheatCode from './cheatcode';
import Shortcut from './shortcut';
const log = debug('unlock:core');

export default class Unlock {
	constructor() {
		log('Unlock created.');
	}

	static get CheatCode() {
		return CheatCode;
	}

	static get Shortcut() {
		return Shortcut;
	}
}