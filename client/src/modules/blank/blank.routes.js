'use strict';

angular.module('app.blank').config(function ($stateProvider) {
  $stateProvider.state('tab.blank', {
    url: '/blank',
    views: {
      'tab-blank': {
        templateUrl: 'src/modules/blank/views/blank.html',
        controller: 'BlankCtrl as blank'
      }
    }
  })
});
