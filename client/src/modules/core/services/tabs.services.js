'use strict';

angular.module('app.core').service('TabsService', function () {
  var tabs = [];

  this.addTab = function (name, title, href, iconOn, iconOff) {
    tabs.push({
      name: name,
      title: title,
      href: href,
      iconOn: iconOn,
      iconOff: iconOff
    })
  };

  this.getTabs = function () {
    return tabs;
  }
});
