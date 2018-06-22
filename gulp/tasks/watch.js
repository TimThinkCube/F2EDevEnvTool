const gulp = require('gulp'),
gulpWatch = require('gulp-watch'),    
browserSync = require('browser-sync').create();

// basic way to check it work correctly or not.
gulp.task('default', function () {
    console.log('gulp task connect test.');
});

// use gulp watch to auto monitor static html file active
gulp.task('html', function () {
    console.log('html task running');
});

gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })

    gulpWatch('./app/index.html', function () {
        browserSync.reload();
        //gulp.start('html');
    })

    gulpWatch('./app/assets/styles/**/*.scss', function() {
        gulp.start('cssInject');
        //gulp.start('styles');
      });

    gulpWatch('./app/assets/scripts/**/*.js',function(){
        gulp.start('scriptsRefresh');
    })
})

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/buildup/styles/styles.css')
})

gulp.task('scriptsRefresh',['scripts'],function(){
    browserSync.reload();
})
