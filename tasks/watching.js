'use strict';

var gulp = require('gulp');
var paths = gulp.paths;
var options = gulp.options;
var bs = require('browser-sync').create();


var bsInit = function (paths, openOverride) {
  var bsOptions = {
    server: {
      baseDir: paths
    },
    browser: 'google chrome',
    open: true
  };

  bs.init(bsOptions);
};

gulp.task('watch', ['inject-all'], function () {

  bsInit(['client', 'client/.tmp']);

  var watchFiles = ['client/src/index.html'];

  watchFiles.push(paths.client.src);
  watchFiles.push(paths.client.templates);

  gulp.watch(watchFiles, function (event) {
    gulp.helpers.info('File ' + event.path + ' was ' + event.type + ', Running tasks...');
    if (event.type === 'changed') {
      bs.reload();
    } else {
      gulp.start('build');
    }
  });

  // Watch for changed scss files
  gulp.watch('client/modules/**/styles/**/*.scss', ['styles']);

  // Watch for changes in environment files
  gulp.watch('client/environments/*.json', ['environment']);
});
