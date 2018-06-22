const gulp = require('gulp'),
    gulpPostCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    cssvars = require('postcss-simple-vars'),
    cssImport = require('postcss-import'),
    hexrgba = require('postcss-hexrgba');


gulp.task('styles', function () {
    // check task run state
    console.log('Sass and PostCss task running')
    return gulp.src('./app/assets/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpPostCss([cssImport,cssvars,hexrgba, autoprefixer]))
        .on('error', function (error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest('./app/buildup/styles/'));
})

