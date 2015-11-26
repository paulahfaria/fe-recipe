var dest = './dist';
var src = './app';
var node_modules = './node_modules';
var gutil = require('gulp-util');

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },

  html: {
    src: 'app/index.html',
    dest: dest
  },

  css: {
    src: src + '/styles/**/*.css',
    dest: dest + '/styles'
  },

  fonts: {
    src:  node_modules + '/bootstrap-sass/assets/fonts/**/*',
    dest: dest + '/assets/fonts'
  },

  optimize: {
    images: {
      src:  src + '/assets/images/**/*.{jpg,jpeg,png,gif}',
      dest: dest + '/assets/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    }
  },

  browserify: {
    settings: {
      transform: [
        ['babelify', {presets: ['es2015']}],
        ['uglifyify', {global: true}]
      ],
    },
    src: src + '/src/index.js',
    dest: dest + '/js',
    outputName: 'main.js',
    debug: gutil.env.type === 'dev'
  },

  watch: {
    src: src + '/**/*.*',
    tasks: ['build']
  }
};
