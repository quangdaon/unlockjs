module.exports = {
	root: true,
	env: {
		es6: true
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error'
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [
		{
			// TypeScript files
			files: ['./**/*.ts'],
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-empty-function': 'error'
			},
			extends: ['plugin:@typescript-eslint/recommended']
		},
		{
			// Config files
			files: ['./*.js', './config/*.js'],
			globals: {
				module: 'writable',
				require: 'readonly',
				__dirname: 'readonly'
			}
		}
	]
};
