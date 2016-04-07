(function() {
  'use strict';
  angular.module('app')
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
