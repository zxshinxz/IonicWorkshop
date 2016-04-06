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

(function() {
  'use strict';

  angular.module('starter')
    .factory('BrowseModel', BrowseModel);

  BrowseModel.$inject = [];

  function BrowseModel() {

    var Model = {

    };

    return Model;
  }
})();

(function() {
  'use strict';

  angular.module('starter')
    .controller('MainController', function($scope, $ionicModal, $timeout) {
      $scope.loginData = {};

      $ionicModal.fromTemplateUrl('templates/loginModal.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      $scope.login = function() {
        $scope.modal.show();
      };

      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };
    });

})();

(function() {
  'use strict';

  angular.module('starter')
    .factory('MainModel', MainModel);

  function MainModel() {

    var Model = {

    };

    return Model;
  }
})();

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

(function() {
  'use strict';

  angular.module('starter')
    .factory('PlayDetailModel', PlayDetailModel);

  PlayDetailModel.$inject = [];

  function PlayDetailModel() {

    var Model = {

    };

    return Model;
  }
})();

(function() {
  'use strict';
  angular.module('starter')
    .controller('PlayListController', PlayListController);

  PlayListController.$inject = [
    '$scope',
    'PlayListModel'
  ];

  function PlayListController(
    $scope,
    PlayListModel
  ) {
    var PlayList = this;
    PlayList.Model = PlayListModel;
    // test

    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];

    //====================================================
    //  Implementation
    //====================================================
  }
})();

(function() {
  'use strict';

  angular.module('starter')
    .factory('PlayListModel', PlayListModel);

  PlayListModel.$inject = [];

  function PlayListModel() {

    var Model = {

    };

    return Model;
  }
})();

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

(function() {
  'use strict';

  angular.module('starter')
    .factory('SearchModel', SearchModel);

  SearchModel.$inject = [];

  function SearchModel() {

    var Model = {

    };

    return Model;
  }
})();
