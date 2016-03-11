'use strict';

angular.module('app.core', [
    'ionic',
    'ngCordova',
    'ui.router',
    'js-data',
    'formly', 'formlyIonic',
    'ngStamplay',
    'ngMask'
  ])
  .run(function (DS, DSHttpAdapter) {
    DS.registerAdapter('http', DSHttpAdapter, {default: true});
  })
  .config(function (formlyConfigProvider, DSProvider, DSHttpAdapterProvider) {
    // Configure Formly
    formlyConfigProvider.setType({
      name: 'item-divider',
      template: '<ion-item class="item-divider">{{options.templateOptions.label}}</ion-item>'
    });

    // Configure data adapter
    angular.extend(DSProvider.defaults, {});
    angular.extend(DSHttpAdapterProvider.defaults, {
      basePath: '/api'
    });
  });
