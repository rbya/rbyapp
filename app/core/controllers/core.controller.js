'use strict';

angular.module('app.core').controller('CoreCtrl', function ($scope, $state, $ionicLoading, $ionicModal, RegisterFields, $ionicPopup, LoginFields, DS, auth) {
  if (auth.isAuthenticated) {
      $state.go('app.dash');
  }

  this.login = function () {
      auth.config.auth0lib.show();
  };

  $scope.hideModal = function () {
    $scope.modal.hide();
  };
});
