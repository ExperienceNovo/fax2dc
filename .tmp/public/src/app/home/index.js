var app = angular.module( 'fax2dc.home' , [])

.config(function config( $stateProvider ) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/index.tpl.html'
            }
        },
        resolve: {
            legislators: function(LegislatorModel) {
                return LegislatorModel.getAll();
            }
        }
    });
});


var homeCtrl = app.controller('HomeCtrl', function HomeController( $scope, config, FaxModel, $stateParams, $location, titleService, legislators) {

    titleService.setTitle('Fax2DC');

  	$scope.reverse = false;
  	$scope.sortField = 'state';

    $scope.legislators = legislators;
    console.log($scope.legislators)

    // $scope.congressMen = [{
    //   	party: "Bros",
    //     firstName: 'Guy',
    //     lastName: 'Fieri',
    //     state: 'AZ',
    // },
    // {
    //   	party: "Bros",
    //     firstName: 'Jeckel',
    //     lastName: 'Goldbloom',
    //     state: 'CA',
    // },
    // {
    //   	party: "Hos",
    //     firstName: 'Hey',
    //     lastName: 'Guys',
    //     state: 'HI',
    // },
    // {
    //   	party: "Bros",
    //     firstName: 'Jeckel',
    //     lastName: 'Goldbloom',
    //     state: 'CA',
    // },
    // {
    //   	party: "Hos",
    //     firstName: 'Hey',
    //     lastName: 'Guys',
    //     state: 'HI',
    // },
    // {
    //   	party: "Bros",
    //     firstName: 'Jeckel',
    //     lastName: 'Goldbloom',
    //     state: 'CA',
    // },
    // {
    //   	party: "Hos",
    //     firstName: 'Hey',
    //     lastName: 'Guys',
    //     state: 'HI',
    // },
    // {
    //   	party: "Bros",
    //     firstName: 'Jeckel',
    //     lastName: 'Goldbloom',
    //     state: 'CA',
    // },
    // {
    //   	party: "Hos",
    //     firstName: 'Hey',
    //     lastName: 'Guys',
    //     state: 'HI',
    // },
    // {
    //   	party: "Bros",
    //     firstName: 'Jeckel',
    //     lastName: 'Goldbloom',
    //     state: 'CA',
    // },
    // {
    //   	party: "Hos",
    //     firstName: 'Hey',
    //     lastName: 'Guys',
    //     state: 'HI',
    // },
    // {
    //   	party: "Hos",
    //     firstName: 'Whats',
    //     lastName: 'Hecking',
    //     state: 'UP',
    // }];

    $scope.submitFax = function() {

        var selectedCongressMen = $scope.congressMen.filter(function(val, ind, arr) {
            return val.hasOwnProperty('selected') && val.selected === true;
        });
        $scope.newFax.legislatorList = selectedCongressMen;

        //Store in database.
        //Call the send fax api.
        console.log($scope.newFax)

        //console.log('attempting to get legislators...')

        //console.log(LegislatorModel.getAll())

        FaxModel.create($scope.newFax).then(function(){
            //reinitialize
            //$scope.name = "";
            //$scope.email = "";
            //$scope.message = "";
        });

        //  console.log($scope.newFax);
        // //reinitialize
        // $scope.name = "";
        // $scope.email = "";
        // $scope.message = "";
    };

    $scope.changeSorting = function(field) {
      alert(field);
    }
});

// homeCtrl.loadLegislators = function() {
//
// }
