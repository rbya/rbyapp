'use strict';

angular.module('app.core').controller('AppCtrl', function (SideMenu, $timeout, $ionicHistory, $state, DS, auth) {
  this.sideMenuItems = SideMenu.getItems();

  this.logout = function () {
    auth.signout();
    store.remove('profile');
    store.remove('token');

    $state.go('core.main');
  }
});
