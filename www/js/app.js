// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ionic',
  'ngResource',
  'ngStorage'
])

.run(function($ionicPlatform, $window) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if ($window.cordova && $window.cordova.plugins.Keyboard) {
      $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      $window.cordova.plugins.Keyboard.disableScroll(true);

    }
    if ($window.StatusBar) {
      // org.apache.cordova.statusbar required
      $window.StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/Main/Login');

  $stateProvider

    .state('Main', {
    url: '/Main',
    abstract: true,
    templateUrl: 'states/Main/Main.html',
    controller: 'MainController as vm'
  })

  .state('Main.Login', {
    url: '/Login',
    views: {
      Main: {
        templateUrl: 'states/Login/Login.html',
        controller: 'LoginController as vm'
      }
    }
  })



  // .state('app', {
  //   url: '/app',
  //   abstract: true,
  //   templateUrl: 'states/Main/Main.html',
  //   // controller: 'MainController'
  // })

  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'states/Search/Search.html',
  //       controller: 'SearchController'
  //     }
  //   }
  // })

  // .state('app.browse', {
  //   url: '/browse',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'states/Browse/Browse.html',
  //       controller: 'BrowseController'
  //     }
  //   }
  // })

  // .state('app.playlists', {
  //   url: '/playlists',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'states/PlayList/PlayList.html',
  //       controller: 'PlayListController'
  //     }
  //   }
  // })

  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'states/PlayDetail/PlayDetail.html',
  //       controller: 'PlayDetailController'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
});
