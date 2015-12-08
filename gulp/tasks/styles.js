var gulp = require('gulp');
var postcss = require('gulp-postcss');
var connect = require('gulp-connect');
var config = require('../config.js').css;

gulp.task('styles', function() {
    return gulp.src(config.src)
        .pipe(postcss([
		      require('precss')({ /* options */ }), 
		      require('autoprefixer'), 
		      require('cssnano')
	      ]))
        .pipe(gulp.dest(config.dest))
        .pipe(connect.reload());
});
