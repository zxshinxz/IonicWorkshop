(function() {
  'use strict';
  angular.module('starter')
    .controller('BrowseController', BrowseController);

  BrowseController.$inject = [
    'BrowseModel'
  ];

  function BrowseController(
    BrowseModel
  ) {
    var Browse = this;
    Browse.Model = BrowseModel;


    //====================================================
    //  Implementation
    //====================================================
  }
})();
