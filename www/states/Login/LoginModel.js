(function() {
  'use strict';

  angular.module('app')
    .factory('LoginModel', LoginModel);

  LoginModel.$inject = [];

  function LoginModel() {

    var Model = {
      form: {
        email: null,
        password: null
      }
    };

    return Model;
  }
})();
