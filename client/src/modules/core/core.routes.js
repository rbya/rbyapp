'use strict';

angular.module('app.core').config(function ($stateProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    controller: 'MainCtrl as main',
    abstract: true,
    templateUrl: 'src/modules/core/views/layouts/tabs.html'
  })
});
