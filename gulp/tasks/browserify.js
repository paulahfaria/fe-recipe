var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif     = require('gulp-if');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var connect = require('gulp-connect');
var config = require('../config').browserify;

watchify.args.debug = config.debug;
var bundler = watchify(browserify(config.src, watchify.args));

config.settings.transform.forEach(function(t) {
  bundler.transform(t);
});

gulp.task('browserify', bundle);
bundler.on('update', bundle);

function bundle() {
  var isDev = (gutil.env.type === 'dev');
  
  return bundler.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source(config.outputName))
  .pipe(buffer())
  .pipe(gulpif(isDev, sourcemaps.init({loadMaps: true})))
  .pipe(gulpif(isDev, sourcemaps.write('./')))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload());
}
