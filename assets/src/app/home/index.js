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
    $scope.showSelected = false;

    $scope.legislators = legislators;
    $scope.stateAbrvs = _.uniq(legislators.map(function(curr, val, index) {
      return curr.state;
    })).sort();
    $scope.partyIncludes = [];
    //console.log($scope.legislators)


    $scope.submitFax = function() {
      if ($scope.newFax.trap !== undefined)
        console.log('get out'); // display fake successful form submission
      else {
        var selectedLegislators = $scope.legislators.filter(function(val, ind, arr) {
            return val.hasOwnProperty('selected') && val.selected === true;
        });
        $scope.newFax.legislatorList = selectedLegislators;

        console.log($scope.newFax);

        FaxModel.create($scope.newFax).then(function(){

            //reinitialize
            //$scope.name = "";
            //$scope.email = "";
            //$scope.message = "";

        });

      }

      //redirect?

    };

    $scope.changeSorting = function(field) {
      $scope.reverse = $scope.sortField === field ? !$scope.reverse : false;
      $scope.sortField = field;
    };

    $scope.includeParty = function(party) {
      var i = _.indexOf($scope.partyIncludes, party);
      if (i > -1)
        $scope.partyIncludes.splice(i, 1);
      else
        $scope.partyIncludes.push(party);
    };

    $scope.partyFilter = function(legislator) {
      if ($scope.partyIncludes.length > 0) {
        if (_.indexOf($scope.partyIncludes, legislator.party) < 0)
          return;
      }
      return legislator;
    };
    $scope.selectedFilter = function(legislator) {
      if ($scope.showSelected) {
        if (legislator.selected === true)
          return legislator;
        return;
      } else {
        return legislator;
      }
    };

    $scope.getClass = function(legislator) {
      var klass = legislator.selected ? 'selected' : '';
      return klass += legislator.party === 'D' ? ' info'
                    : legislator.party === 'R' ? ' danger' : ' warning';
    };
});

// homeCtrl.loadLegislators = function() {
//
// }
