(function() {
  'use strict';

  angular.module('app')
    .controller('MainController', function($scope, $ionicModal, $timeout) {
      $scope.loginData = {};

      $ionicModal.fromTemplateUrl('templates/loginModal.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      $scope.login = function() {
        $scope.modal.show();
      };

      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };
    });

})();
