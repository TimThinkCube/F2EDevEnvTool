var gulp = require('gulp'),
modernizr = require('gulp-modernizr');
// a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.
// if the browser is not support HTML5 and CSS3 , this lib will use the other way to simulate actions. 
gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/buildup/scripts/'));
});


