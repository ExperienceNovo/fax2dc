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
      selected: false 
    }, {
    	party: "Bros",
      firstName: 'Jeckel', 
      lastName: 'Goldbloom',
      state: 'CA',
      selected: false 
    }, {
    	party: "Hos",
      firstName: 'Hey',
      lastName: 'Guys',
      state: 'HI',
      selected: false 
    }, {
    	party: "Hos",
      firstName: 'Whats',
      lastName: 'Hecking',
      state: 'UP',
      selected: false 
    }];

    $scope.submitFax = function() {
      // Call the send fax api.
      // Store in database.
      console.log($scope.newFax);
      $scope.name = "";
      $scope.email = "";
      $scope.message = "";
    };
    $scope.consoleSelected = function() {
    var selectedIdiots = $scope.congressMen.filter(function(val, ind, arr) {
      return val.hasOwnProperty('selected') && val.selected === true;
    });
    console.log(selectedIdiots);
  };  
  });