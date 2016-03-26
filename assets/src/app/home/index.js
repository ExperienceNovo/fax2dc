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
    //console.log($scope.legislators)


    $scope.submitFax = function() {

        var selectedLegislators = $scope.legislators.filter(function(val, ind, arr) {
            return val.hasOwnProperty('selected') && val.selected === true;
        });
        $scope.newFax.legislatorList = selectedLegislators;

        console.log($scope.newFax)

        FaxModel.create($scope.newFax).then(function(){

            //reinitialize
            //$scope.name = "";
            //$scope.email = "";
            //$scope.message = "";

        });
    };

    $scope.changeSorting = function(field) {
      //
      // LOGIC to set SORTFIELD and REVERSE
      //
      alert(field);
    }
});

// homeCtrl.loadLegislators = function() {
//
// }
