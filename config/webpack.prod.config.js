const min = require('./webpack.config')();

min.devtool = 'none';
min.entry = { '/unlock': ['./src/unlock.js'] };
min.mode = 'production';
min.output.filename = '[name].min.js';

const unmin = require('./webpack.config')();

unmin.devtool = 'none';
unmin.entry = { '/unlock': ['./src/unlock.js'] };
unmin.mode = 'development';
unmin.output.filename = '[name].js';

module.exports = [min, unmin];