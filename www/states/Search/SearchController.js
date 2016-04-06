(function() {
  'use strict';
  angular.module('starter')
    .controller('SearchController', SearchController);

  SearchController.$inject = [
    'SearchModel'
  ];

  function SearchController(
    SearchModel
  ) {
    var Search = this;
    Search.Model = SearchModel;


  }
})();
