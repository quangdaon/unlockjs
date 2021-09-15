const min = require('./webpack.config')();

min.entry = { '/unlock': ['./src/unlock.ts'] };
min.mode = 'production';
min.devtool = false;
min.output.filename = '[name].min.js';

const unmin = require('./webpack.config')();

unmin.entry = { '/unlock': ['./src/unlock.ts'] };
unmin.mode = 'development';
unmin.devtool = false;
unmin.output.filename = '[name].js';

module.exports = [min, unmin];