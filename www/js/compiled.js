'use strict';

(function () {
  'use strict';

  angular.module('app').controller('BrowseController', BrowseController);

  BrowseController.$inject = ['BrowseModel'];

  function BrowseController(BrowseModel) {
    var Browse = this;
    Browse.Model = BrowseModel;

    //====================================================
    //  Implementation
    //====================================================
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('BrowseModel', BrowseModel);

  BrowseModel.$inject = [];

  function BrowseModel() {

    var Model = {};

    return Model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('LoginController', LoginController);

  LoginController.$inject = ['LoginModel'];

  function LoginController(LoginModel) {
    var vm = this;
    vm.Model = LoginModel;
    console.log("'test' :::\n", 'test');

    //====================================================
    //  Implementation
    //====================================================
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('LoginModel', LoginModel);

  LoginModel.$inject = [];

  function LoginModel() {

    var Model = {};

    return Model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('MainController', function ($scope, $ionicModal, $timeout) {
    $scope.loginData = {};

    $ionicModal.fromTemplateUrl('templates/loginModal.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    $scope.login = function () {
      $scope.modal.show();
    };

    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  });
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('MainModel', MainModel);

  function MainModel() {

    var Model = {};

    return Model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('PlayDetailController', PlayDetailController);

  PlayDetailController.$inject = ['PlayDetailModel'];

  function PlayDetailController(PlayDetailModel) {
    var PlayDetail = this;
    PlayDetail.Model = PlayDetailModel;

    //====================================================
    //  Implementation
    //====================================================
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('PlayDetailModel', PlayDetailModel);

  PlayDetailModel.$inject = [];

  function PlayDetailModel() {

    var Model = {};

    return Model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('PlayListController', PlayListController);

  PlayListController.$inject = ['$scope', 'PlayListModel'];

  function PlayListController($scope, PlayListModel) {
    var PlayList = this;
    PlayList.Model = PlayListModel;
    // test

    $scope.playlists = [{ title: 'Reggae', id: 1 }, { title: 'Chill', id: 2 }, { title: 'Dubstep', id: 3 }, { title: 'Indie', id: 4 }, { title: 'Rap', id: 5 }, { title: 'Cowbell', id: 6 }];

    //====================================================
    //  Implementation
    //====================================================
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('PlayListModel', PlayListModel);

  PlayListModel.$inject = [];

  function PlayListModel() {

    var Model = {};

    return Model;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').controller('SearchController', SearchController);

  SearchController.$inject = ['SearchModel'];

  function SearchController(SearchModel) {
    var Search = this;
    Search.Model = SearchModel;
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('app').factory('SearchModel', SearchModel);

  SearchModel.$inject = [];

  function SearchModel() {

    var Model = {};

    return Model;
  }
})();