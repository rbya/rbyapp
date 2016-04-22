'use strict';

angular.module('app.core').controller('CoreCtrl', function ($scope, $state, $ionicLoading, $ionicModal, $ionicPopup, DS, auth, store) {
  if (auth.isAuthenticated) {
    $state.go('app.dash');
  }

  $scope.login = {
    email: '',
    password: '',
    error: ''
  };

  this.login = function () {
    auth.signin({
      sso: false,
      connection: 'Username-Password-Authentication',
      authParams: {
        scope: 'openid name email'
      },
      username: $scope.login.email,
      password: $scope.login.password
    }, function loginSuccess(profile, token) {
      store.set('profile', profile);
      store.set('token', token);
    }, function loginError(error) {
      $scope.login.error = error.details.error_description;
    });
  };

  $scope.hideModal = function () {
    $scope.modal.hide();
  };
});
