'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var options = gulp.options;
var bs = require('browser-sync').create();

gulp.task('watch', ['inject-all'], function () {
  bs.init({
    server: {
      baseDir: ['client/www', 'client/']
    },
    browser: 'google chrome',
    open: true
  });

  var files = [
    'client/src/index.html',
    'client/modules/**/styles/**/*.scss',
    'client/environments/*.json',
    paths.client.src,
    paths.client.templates
  ];

  gulp.watch(files, ['refresh'], function (event) {
    var filename = event.path.split('/')[event.path.split('/').length - 1];
    gulp.helpers.info('File ' + filename + ' was ' + event.type + ' ... rebuild ... done');
  });

  gulp.helpers.info('Watching files for changes...')
});

gulp.task('refresh', ['inject-all'], function (done) {
  gulp.helpers.info("Refreshing...");
  bs.reload();
  done()
});
