export const errors = {
	type(descriptor, expected, result) {
		return new TypeError(`Type Mismatch for ${descriptor}: Expected (${expected}) - Got ${result}`);
	},
	required(descriptor) {
		return new Error(`${descriptor} is required.`);
	}
};

export function validate(variable) {
	let desc = 'variable';
	return {
		as(name) {
			desc = name;
			return this;
		},
		required() {
			if (typeof variable === 'undefined') throw errors.required(desc);
			return this;
		},
		type(expected) {
			if (typeof variable === 'undefined') return this;

			if (!(expected instanceof Array)) expected = [expected];

			if (expected.find(e => {
				return typeof e === 'string' ? e === typeof variable : variable instanceof e;
			})) {
				return this;
			}

			throw errors.type(desc, expected.map(e => e.name || e).join('|'), typeof variable);
		}
	};
}