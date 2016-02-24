'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

// Configure paths
gulp.paths = {
  client: {
    dist: 'client/www',
    src: 'client/src/**/*.js',
    templates: 'client/**/*.jade',
    karma: 'client/test/karma/**/*.js',
    protractor: 'client/test/protractor/**/*.js'
  },
  server: {}
};

// Load available tasks
requireDir('./gulp');

