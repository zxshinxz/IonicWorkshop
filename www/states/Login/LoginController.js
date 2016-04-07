(function() {
  'use strict';
  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    'LoginModel'
  ];

  function LoginController(
    LoginModel
  ) {
    var vm = this;
    vm.Model = LoginModel;
    console.log("'test' :::\n", 'test');

    //====================================================
    //  Implementation
    //====================================================
  }
})();
