// local storage wrapper, name spaced.
(function(angular) {
  'use strict';

  angular.module('app')
    .factory('AppStorage', AppStorage);

  AppStorage.$inject = [
    '$localStorage',
    'APP_NAME'
  ];

  function AppStorage(
    $localStorage,
    APP_NAME
  ) {

    if (!$localStorage[APP_NAME]) {
      $localStorage[APP_NAME] = {};
    }

    return $localStorage[APP_NAME];

  }
})(angular);
