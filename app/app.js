'use strict';
angular.module('RBYA', [
  'app.core',
  'app.user',
  'app.dash',
  'angular-storage',
  'auth0',
  'angular-jwt'
]).config(function (storeProvider, authProvider, jwtInterceptorProvider) {
    storeProvider.setStore('sessionStorage');
    
    authProvider.init({
        domain: 'rbyapp-test.auth0.com',
        clientID: 'xVDY2rnSpY2wHHoUru06YXDlPzXyN6OM',
        loginUrl: '/login'
    });

  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('token');
  };
}).run(function (auth, store, jwtHelper) {
    if (!auth.isAuthenticated) {
      var token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          auth.authenticate(store.get('profile'), token);
        } else {
          $location.path('/login');
        }
      }
    }
});
