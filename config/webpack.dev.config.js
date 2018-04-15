const config = require('./webpack.config')({
	babelPlugins: ['istanbul']
});

config.mode = 'development';
config.entry = {
	unlock: ['./src/unlock.js'],
	demo: ['./demo/index.js']
};

module.exports = config;