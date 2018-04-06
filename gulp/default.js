var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	runSequence(
		'copy',
		'sass',
		'webpack',
		'server',
		'copy:watch',
		'sass:watch',
		'webpack:watch'
	);
})