const path = require('path');

module.exports = {
	entry: {
		unlock: ['./src/unlock.js']
	},
	mode: 'development',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		library: 'Unlock',
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
							presets: ['env']
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
