const config = require('./webpack.config')();

config.mode = 'development';
config.entry = {
	unlock: ['./src/unlock.js'],
	demo: ['./demo/index.js']
};

module.exports = config;