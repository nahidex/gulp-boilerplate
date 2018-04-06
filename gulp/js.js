var gulp = require('gulp');
var browserify = require('browserify');
var config = require('../package.json').config;
var source = require('vinyl-source-stream');

gulp.task('js', function(){
	return browserify(config.src.js + '/main.js')
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest(config.build.js));
});

gulp.task('js:watch', function () {
  gulp.watch(config.src.js + '/**/*.js', ['js']);
});