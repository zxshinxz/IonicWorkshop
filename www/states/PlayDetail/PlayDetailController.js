(function() {
  'use strict';
  angular.module('starter')
    .controller('PlayDetailController', PlayDetailController);

  PlayDetailController.$inject = [
    'PlayDetailModel'
  ];

  function PlayDetailController(
    PlayDetailModel
  ) {
    var PlayDetail = this;
    PlayDetail.Model = PlayDetailModel;


    //====================================================
    //  Implementation
    //====================================================
  }
})();
