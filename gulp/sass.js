var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../package.json').config;

var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src( config.src.sass + '/**/*.{scss,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.build.css));
});

gulp.task('sass:watch', function () {
  gulp.watch(config.src.sass + '/**/*.{scss,sass}', ['sass']);
});