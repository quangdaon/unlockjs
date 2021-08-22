const config = require('./webpack.config')();
const path = require('path');

config.mode = 'development';
config.entry = {
	unlock: ['./src/unlock.js'],
	demo: ['./demo/index.js'],
};
config.devServer = {
	static: {
		directory: path.join(__dirname, '../demo'),
	},
	compress: true,
	port: 9000,
};

module.exports = config;