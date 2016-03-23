angular.module('fax2dc.home', [])

.config(function config($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    views: {
      "main": {
        controller: 'formCtrl',
        templateUrl: 'home/index.tpl.html'
      }
    }
  });
})


.controller('formCtrl', function FormController( $scope ) {
		titleService.setTitle('lololol');
    $scope.monkey = 10;

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