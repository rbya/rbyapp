'use strict';

var gulp = require('gulp');
var fs = require('fs');
var paths = gulp.paths;
var options = gulp.options;
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep');
var mainBowerFiles = require('main-bower-files');

gulp.task('inject-all', ['styles', 'wiredep'], function () {
  return gulp.src('client/www/index.html')
    .pipe(
      // Inject src JS
      $.inject(
        gulp.src(paths.client.src)
          .pipe($.plumber())
          .pipe($.naturalSort())
          .pipe($.angularFilesort()),
        {relative: true}
      )
    )
    .pipe(
      // Inject compiled css
      $.inject(
        gulp.src('client/.tmp/**/styles/*.css', {read: false})
          .pipe($.naturalSort()),
        {
          ignorePath: '../client/.tmp',
          relative: true
        }
      )
    )
    .pipe(gulp.dest('client/www'))
});

gulp.task('styles', function () {
  return gulp.src('client/src/modules/*/styles/!(_)*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync().on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 2 versions'], remove: false}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('client/.tmp/'));
});

gulp.task('wiredep', function () {
  return gulp.src('client/src/index.html')
    .pipe(wiredep.stream())
    .pipe(gulp.dest('client/www'))
});

gulp.task('environment', function () {
  // Need an ng constant generator
});
