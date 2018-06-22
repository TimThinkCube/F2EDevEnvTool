const gulp = require('gulp'),
    gulpPostCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');


gulp.task('styles', function () {
    // check task run state
    console.log('Sass and PostCss task running')
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(gulpPostCss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on('error', function (error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest('./app/buildup/styles/'));
})