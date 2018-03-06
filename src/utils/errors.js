export function Require(variable, descriptor) {
	if (!variable) throw new Error('Missing Variable' + descriptor);

	return {
		toBe(type) {
			if (!type.find(e => e === typeof variable)) throw new TypeError(`Expected ${descriptor} to be (${type.join('|')}); got ${typeof variable}`);
		}
	};
}