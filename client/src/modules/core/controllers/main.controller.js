'use strict';

angular.module('app.core').controller('MainCtrl', function (TabsService) {
  this.tabs = TabsService.getTabs();
});
