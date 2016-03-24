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


.controller('HomeCtrl', function HomeController( $scope, titleService ) {
		titleService.setTitle('Title Service is Working');

		$scope.count=0;
  	$scope.selected = false;
  	$scope.reverse = true;
  	$scope.sortField = 'firstName';

    $scope.congressMen = [{
    	party: "Bros",
      firstName: 'Guy',
      lastName: 'Fieri',
      state: 'AZ',
    }, {
    	party: "Bros",
      firstName: 'Jeckel',
      lastName: 'Goldbloom',
      state: 'CA',
    }, {
    	party: "Hos",
      firstName: 'Hey',
      lastName: 'Guys',
      state: 'HI',
    }, {
    	party: "Hos",
      firstName: 'Whats',
      lastName: 'Hecking',
      state: 'UP',
    }];

    $scope.submitFax = function() {
      // Call the send fax api.
      // Store in database.
      var selectedIdiots = $scope.congressMen.filter(function(val, ind, arr) {
        return val.hasOwnProperty('selected') && val.selected === true;
      });
      $scope.newFax.sendTo = selectedIdiots;

      console.log($scope.newFax);

      $scope.name = "";
      $scope.email = "";
      $scope.message = "";
  };
});
