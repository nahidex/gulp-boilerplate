var gulp = require('gulp');
var config = require('../package.json').config;

gulp.task('watch', [
    'copy:watch',
    'sass:watch',
    'webpack:watch'
]);
