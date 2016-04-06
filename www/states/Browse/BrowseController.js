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

    class Test {
      constructor() {
        this.test = 'test';
      }
    }

    var test = new Test();
    //====================================================
    //  Implementation
    //====================================================
  }
})();
