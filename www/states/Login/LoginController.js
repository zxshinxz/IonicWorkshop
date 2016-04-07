(function() {
  'use strict';
  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    'Users', 'LoginModel', 'AppStorage'
  ];

  function LoginController(
    Users, LoginModel, AppStorage
  ) {
    var vm = this;
    vm.Model = LoginModel;

    vm.login = login;

    //====================================================
    //  VM
    //====================================================
    function login() {
      return Users.login({
          identifier: vm.Model.form.email,
          password: vm.Model.form.password
        }).$promise
        .then(function(userWrapper) {
          AppStorage.user = userWrapper.user;
          AppStorage.token = userWrapper.token;
        })
    }

    //====================================================
    //  Helper
    //====================================================
  }
})();
