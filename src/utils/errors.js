export function Require(variable, descriptor) {
	if (!variable) throw new Error('Missing Variable' + descriptor);

	return {
		toBe(type) {
			if (!type.find(e => typeof e === 'string' ? e === typeof variable : variable instanceof e)) {
				throw new TypeError(`Expected ${descriptor} to be (${type.map(e => e.name || e).join('|')}); got ${typeof variable}`);
			}
		}
	};
}