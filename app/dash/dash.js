'use strict';

angular.module('app.dash', ['app.core'])
  .run(function (SideMenu) {
    // Add sidemenu
    SideMenu.add('Dashboard', 'app.dash', 'ion-speedometer', 0);
  });
