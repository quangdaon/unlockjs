const config = require('./webpack.config');

config.mode = 'production';
config.devtool = 'none';
config.output.filename = '[name].min.js';
config.entry = { '/unlock': ['./src/unlock.js'] };

module.exports = config;