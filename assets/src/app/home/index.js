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
      $scope.reverse = $scope.sortField === field ? !$scope.reverse : false;
      $scope.sortField = field;
    }

    $scope.getClass = function(legislator) {
      var klass = legislator.selected ? 'selected' : '';
      return klass += legislator.party === 'D' ? ' info'
                    : legislator.party === 'R' ? ' danger' : ' warning';
    }
});

// homeCtrl.loadLegislators = function() {
//
// }
