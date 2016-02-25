'use strict';

angular.module('app', [
    'ionic',
    'app.core', 'app.blank'
  ])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/blank');
  });
