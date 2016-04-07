(function() {
  'use strict';

  angular.module('app')
    .factory('Users', Users);

  Users.$inject = [
    '$resource',
    'SERVER_URL'
  ];

  function Users(
    $resource,
    SERVER_URL
  ) {

    let url = SERVER_URL + '/user' + '/:uri';

    let params = { uri: '@uri' };

    let actions = {
      register: {
        method: 'POST',
        params: {
          uri: 'register'
        }
      },

      login: {
        method: 'POST',
        params: {
          uri: 'login'
        }
      }

    };

    let Service = $resource(url, params, actions);

    return Service;
  }
})();
