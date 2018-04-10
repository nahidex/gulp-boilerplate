var gulp        = require('gulp');
var server = require('browser-sync').create();

gulp.task('server', function() {
    return server.init({
        server: {
            baseDir: "./build",
            directory: false,
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        files: [
            'build/*.html',
            'build/css/*.css',
            'build/img/*.*'
        ]
    });
});


module.exports = server;