'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: ['jasmine', 'browserify'],

    files: [
      './app/src/**/*-spec.js'
    ],

    reporters: ['dots'],

    preprocessors: {
      './app/src/**/*.js': ['browserify']
    },

    browsers: ['PhantomJS'],

    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [
        ['babelify', {presets: ['es2015']}] 
      ]
    }
  });
};