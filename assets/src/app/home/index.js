angular.module( 'fax2dc.home' , [])

.config(function config( $stateProvider ) {
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

.controller('HomeCtrl', function HomeController( $scope, config, FaxModel, $sce, $http, $stateParams, $location, titleService) {
	titleService.setTitle('Fax2DC');

	$scope.count=0;
  	$scope.selected = false;
  	$scope.reverse = true;
  	$scope.sortField = 'firstName';

    //dynamically loadedin via a resolve statement
    //$scope.representatives = representatives;

    $scope.congressMen = [{
      	party: "Bros",
        firstName: 'Guy',
        lastName: 'Fieri',
        state: 'AZ',
    },
    {
      	party: "Bros",
        firstName: 'Jeckel',
        lastName: 'Goldbloom',
        state: 'CA',
    },
    {
      	party: "Hos",
        firstName: 'Hey',
        lastName: 'Guys',
        state: 'HI',
    },
    {
      	party: "Hos",
        firstName: 'Whats',
        lastName: 'Hecking',
        state: 'UP',
    }];

    $scope.submitFax = function() {

        var selectedCongressMen = $scope.congressMen.filter(function(val, ind, arr) {
            return val.hasOwnProperty('selected') && val.selected === true;
        });
        $scope.newFax.legislators = selectedCongressMen;

        //Store in database.
        //Call the send fax api.
        FaxModel.create($scope.newFax).then(function(){
            //reinitialize
            $scope.name = "";
            $scope.email = "";
            $scope.message = "";
        });

        //  console.log($scope.newFax);
        // //reinitialize
        // $scope.name = "";
        // $scope.email = "";
        // $scope.message = "";
    };
});
