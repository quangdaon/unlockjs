import debug from 'debug';
import CheatCode from './cheatcode';
import Shortcut from './shortcut';
import { arraysMatch } from './utils/helpers';

const log = debug('unlock:core');

export default class Unlock {

	@Private
	cheats = [];

	//@Private
	keyslist = [];

	constructor(options = {}) {
		const {
			timeout = 500,
			resetOnMatch = false
		} = options;

		log('Unlock created.');

		this.timeout = timeout;

		Object.assign(this, {
			timeout,
			resetOnMatch
		});

		log(this.timeout);

		this.bindListener();
	}

	@Private
	bindListener() {
		let keyTimer;

		document.addEventListener('keydown', e => {
			this.keyslist.push(e.which);
			log(e.key);

			clearTimeout(keyTimer);
			keyTimer = setTimeout(() => {
				this.reset();
			}, this.timeout);

			this.cheats.forEach(cheat => {
				if (arraysMatch(cheat.code, this.keyslist)) {
					cheat.callback();
					if (this.resetOnMatch) this.reset();
				}
			});
		});
	}

	addCheat(...args) {
		const foundCheat = this.cheats.find(e => e.name === args[0] || e.name === args.name);
		if (foundCheat) {
			throw Error('A cheat has already been created with the name ' + foundCheat.name);
		}

		const cheatCode = new CheatCode(...args);
		this.cheats.push(cheatCode);

		log(cheatCode.code);

		return cheatCode;
	}

	reset() {
		this.keyslist.length = 0;
	}

	get length() {
		return this.cheats.length;
	}

	static get CheatCode() {
		return CheatCode;
	}

	static get Shortcut() {
		return Shortcut;
	}
}