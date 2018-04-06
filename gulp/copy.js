var gulp = require('gulp');

gulp.task('copy', function() {
	return gulp.src('src/**/*')
	.pipe(gulp.dest('build/'));
});

// when there is any new file created the file will be copied into the build folder.
gulp.task('copy:watch', function() {
	gulp.watch('src/**/*', ['copy']);
})