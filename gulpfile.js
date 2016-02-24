'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var minimist = require('minimist');
var chalk = require('chalk');
var $ = require('gulp-load-plugins')();

// Configure paths
gulp.paths = {
  client: {
    dist: 'client/www/',
    src: 'client/src/**/*.js',
    tmp: 'client/.tmp',
    templates: 'client/src/modules/**/*.jade',
    karma: 'client/test/karma/**/*.js',
    protractor: 'client/test/protractor/**/*.js'
  },
  server: {}
};

gulp.helpers = {
  error: function (msg) {
    console.log(chalk.white.bgRed.bold(msg));
  },
  success: function (msg) {
    console.log(chalk.white.bgGreen.bold(msg));
  },
  warn: function (msg) {
    console.log(chalk.white.bgYellow.bold(msg));
  },
  info: function (msg) {
    console.log(chalk.white.bgBlue.bold(msg));
  }
};

// Get command line options
var options = gulp.options = minimist(process.argv.slice(2));

// The first option is that task name
var task = options._[0];

// Set default environment
options.env = options.env || 'dev';

// Load available tasks
requireDir('./tasks');

gulp.task('default', function () {
  gulp.helpers.warn("No task specified");
});

gulp.task('clean', function () {
  // clean the client/www folder
  return gulp.src(gulp.paths.client.dist, {read: false})
    .pipe(clean());
});
