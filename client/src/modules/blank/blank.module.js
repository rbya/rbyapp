'use strict';

angular.module('app.blank', ['app.core'])
  .run(function (TabsService) {
    TabsService.addTab('tab-blank', 'Blank', 'blank', 'ion-ios-pulse-strong', 'ion-ios-pulse');
  });
