// Karma configuration
// Generated on Fri Mar 02 2018 20:26:10 GMT-0600 (CST)
const webpackConfig = require('./config/webpack.config')({
	babelPlugins: ['istanbul']
});

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai-subset', 'sinon-chai'],
		files: [
			'test/execute.js'
		],
		exclude: [],
		preprocessors: {
			'src/*.js': ['webpack'],
			'test/execute.js': ['webpack']
		},
		webpack: {
			mode: webpackConfig.mode,
			module: webpackConfig.module
		},
		reporters: [process.env.KARMA_REPORTER || 'progress', 'coverage'],
		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{ type: 'html', subdir: 'report-html' },
				{ type: 'lcov', subdir: 'report-lcov' }
			]
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Firefox'],
		singleRun: false,
		concurrency: Infinity
	});
};
