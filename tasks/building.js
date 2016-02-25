'use strict';

var gulp = require('gulp');
var fs = require('fs');
var paths = gulp.paths;
var options = gulp.options;
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep');
var mainBowerFiles = require('main-bower-files');

gulp.task('build', ['copySources', 'compileScss', 'compileJade', 'copyIndexFile'], function () {
  gulp.helpers.success("Building finished")
});

gulp.task('copyIndexFile', function () {
  return gulp
    .src('client/src/index.html')
    .pipe(gulp.dest(paths.client.dist))
});

gulp.task('copySources', function () {
  return gulp
    .src(paths.client.src, {base: 'client/'})
    .pipe(gulp.dest(paths.client.dist))
});

gulp.task('compileJade', function () {
  return gulp
    .src(paths.client.templates)
    .pipe($.jade())
    .pipe(gulp.dest(paths.client.dist + 'src/modules'));
});

gulp.task('compileScss', function () {
  return gulp
    .src('client/src/modules/*/styles/!(_)*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync().on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 2 versions'], remove: false}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.client.dist + 'src/modules'));
});

gulp.task('copyAssets', function () {
  return;
});

gulp.task('environment', function () {
  // Need an ng constant generator
});
