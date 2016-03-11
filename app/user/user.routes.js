'use strict';

angular.module('app.user').config(function ($stateProvider) {
  $stateProvider
    .state('app.profile', {
      url: '/profile',
      views: {
        'pageContent': {
          templateUrl: 'user/views/profile.html',
          controller: 'UserCtrl as user'
        }
      }
    });
});
