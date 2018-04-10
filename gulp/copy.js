var gulp = require('gulp');
var config = require('../package.json').config;


gulp.task('copy:rootfiles', function() {
    return gulp
        .src(config.src.root + '/*.html')
        .pipe(gulp.dest(config.build.root));
});


gulp.task('copy:img', function() {
    return gulp
        .src(config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}')
        .pipe(gulp.dest(config.build.img));
});

gulp.task('copy', ['copy:rootfiles', 'copy:img']);

gulp.task('copy:watch', function() {
    gulp.watch(config.src.root + '/*.html', ['copy']);
    gulp.watch(config.src.img+'/*', ['copy']);
});
