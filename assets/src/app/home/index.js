angular.module('fax2dc.home', [])

.config(function config($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/index.tpl.html'
      }
    }
  });
})

.controller('HomeCtrl', function HomeController($scope) {
  titleService.setTitle('Fax2DC');
  $scope.currentUser = config.currentUser;
  $scope.form = document.createElement("FORM");
});

var app = angular.module('form', []);
  app.controller('formController', function($scope) {

    $scope.title = "Fax2DC";

    $scope.congressMen = [{
      firstName: 'Guy',
      lastName: 'Fieri',
      state: 'AZ'
    }, {
      firstName: 'Jeckel',
      lastName: 'Goldbloom',
      state: 'CA'
    }, {
      firstName: 'Hey',
      lastName: 'Guys',
      state: 'HI'
    }, {
      firstName: 'Whats',
      lastName: 'Hecking',
      state: 'UP'
    }];

    $scope.submitFax = function() {
      $scope.faxObject = $scope.newFax;
      // Call the send fax api.
      // Store in database.
      console.log($scope.newFax);
      $scope.name = "";
      $scope.email = "";
      $scope.message = "";
    };
  });