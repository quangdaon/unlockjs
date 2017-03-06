const gulp = require('gulp');
const babel = require('gulp-babel');
const stripCode = require('gulp-strip-code');
const stripComments = require('gulp-strip-comments');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');

const browserSync = require('browser-sync');
const reload = browserSync.reload;

const dist = require('yargs').argv.dist;

gulp.task('build', () => {
	let dest = 'build/js',
		stripOpt = {
			start_comment: "dist:",
			end_comment: "end-dist"
		};

	if (dist) {
		dest = 'dist',
			stripOpt = {
				start_comment: "dev:",
				end_comment: "end-dev"
			};
	}

	return gulp.src('./src/unlock.js')
		.pipe(eslint('./.eslintrc.json'))
		.pipe(eslint.format())
		.pipe(stripCode(stripOpt))
		.pipe(stripComments())
		.pipe(babel({
			presets: ['es2015'],
			plugins: ['transform-object-assign']
		}))
		.pipe(gulp.dest(dest))
		.pipe(uglify().on('error', err => {
			const c = err.cause;
			console.log(`Error in ${c.filename} | ${c.line}:${c.col} - ${c.message}`);
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('serve', ['build'], () => {
	browserSync.create().init({
		port: 5600,
		server: {
			baseDir: './build/demo',
			routes: {
				'/js': dist ? './dist' : './build/js'
			}
		},
		ui: {
			port: 5601
		},
		notify: false,
		ghostMode: false
	});
	gulp.watch('./src/unlock.js', ['build']).on('change', browserSync.reload);
});

gulp.task('test', ['build'], () => {
	browserSync.create().init({
		port: 5700,
		server: {
			baseDir: './build/test',
			routes: {
				'/js': './build/js'
			}
		},
		ui: {
			port: 5701
		},
		notify: false,
		ghostMode: false
	});
	gulp.watch('./src/unlock.js', ['build']).on('change', browserSync.reload);
});

gulp.task('concurrent', ['serve', 'test']);

gulp.task('default', ['concurrent']);