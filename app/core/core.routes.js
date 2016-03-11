'use strict';

angular.module('app.core').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/core/main');

  $stateProvider
    .state('core', {
      url: '/core',
      abstract: true,
      templateUrl: 'core/views/layouts/core.html',
      controller: 'CoreCtrl as core'
    })
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'core/views/layouts/app.html',
      controller: 'AppCtrl as app',
      resolve: {
        user: function ($q, $ionicLoading, $cordovaGeolocation, DS) {
          // Default to user's current location
          //$ionicLoading.show();
          //var deferred = $q.defer();
          //DS.adapters[DS.defaults.defaultAdapter].currentUser().then(function (user) {
          //  if (_.isUndefined(user.location) || _.isEmpty(user.location)) {
          //    $cordovaGeolocation.getCurrentPosition({enableHighAccuracy: true}).then(function (position) {
          //      user.location = {
          //        type: "Point",
          //        coordinates: [position.coords.longitude, position.coords.latitude]
          //      };
          //      $ionicLoading.hide();
          //      deferred.resolve(user);
          //    })
          //  }
          //});
          //
          //return deferred.promise;
          return $q.when(true);
        }
      },
      onEnter: function ($state, user) {
        if (!user) {
          $state.go('core.main');
        }
      }
    })
    .state('core.main', {
      url: '/main',
      templateUrl: 'core/views/main.html',
      controller: 'MainCtrl as main'
    });
});
