var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config').optimize.images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest));
});