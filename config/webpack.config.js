const path = require('path');

module.exports = function (options = { babelPlugins: [] }) {
	const { babelPlugins } = options;
	return {
		entry: {
			unlock: ['./src/unlock.js']
		},
		mode: 'development',
		devtool: 'source-map',
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: '[name].js',
			library: 'Unlock',
			libraryExport: 'default',
			libraryTarget: 'umd',
			umdNamedDefine: true
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
								plugins: [
									'@babel/plugin-proposal-class-properties',
									...babelPlugins
								]
							}
						},
						{
							loader: 'eslint-loader',
							options: {
								configFile: './.eslintrc.json'
							}
						}
					]
				}
			]
		}
	};
};
