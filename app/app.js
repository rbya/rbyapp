'use strict';
angular.module('RBYA', [
  'app.core',
  'app.user',
  'app.dash',
  'auth0'
]).config(function (authProvider) {
    authProvider.init({
        domain: 'rbyapp-test.auth0.com',
        clientID: 'xVDY2rnSpY2wHHoUru06YXDlPzXyN6OM',
        loginUrl: '/login'
    });
}).run(function ($scope, auth) {
    //$scope.on('login', function() {});
    auth.hookEvents();
});
