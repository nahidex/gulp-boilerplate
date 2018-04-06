var gulp        = require('gulp');
var server = require('browser-sync').create();

gulp.task('server', function() {
    server.init({
        server: {
            baseDir: "./build"
        },
        files: [
            'build/*.html',
            'build/css/*.css',
            'build/img/*.*'
        ]
    });
});


module.exports = server;