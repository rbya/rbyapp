'use strict';

var gulp = require('gulp');
var fs = require('fs');
var paths = gulp.paths;
var options = gulp.options;
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep');
var runSequence = require('run-sequence');

gulp.task('inject-all', function () {
  runSequence('build', 'injectSources', 'injectDependencies', function () {
    gulp.helpers.success('Injecting finished');
  });
});

gulp.task('injectSources', function () {
  return gulp.src('client/www/index.html')
    .pipe(
      // Inject src JS
      $.inject(
        gulp.src(paths.client.dist + '/**/*.js')
          .pipe($.plumber())
          .pipe($.naturalSort())
          .pipe($.angularFilesort()),
        {relative: true}
      )
    )
    .pipe(
      // Inject compiled css
      $.inject(
        gulp.src(paths.client.dist + '**/styles/*.css', {read: false})
          .pipe($.naturalSort()),
        {
          relative: true
        }
      )
    )
    .pipe(gulp.dest('client/www'))
});

gulp.task('injectDependencies', function () {
  return gulp.src('client/www/index.html')
    .pipe(wiredep.stream())
    .pipe(gulp.dest('client/www'))
});

gulp.task('environment', function () {
  return;
  // Need an ng constant generator
});
