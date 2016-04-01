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

    console.log(legislators)

    $scope.legislators = legislators;
    $scope.stateAbrvs = _.uniq(legislators.map(function(curr, val, index) {
      return curr.state;
    })).sort();
    $scope.partyIncludes = [];
    $scope.officeIncludes = [];
  	$scope.reverse = false;
  	$scope.sortField = 'state';
    $scope.showSelected = false;

    $scope.legislatorRequiredMessage = '';

    // $scope.selectedLegislators = [];

    $scope.submitFax = function() {
      if ($scope.newFax.trap !== undefined)
        console.log('get out'); // display fake successful form submission
      else {
        var selectedLegislators = $scope.legislators.filter(function(val, ind, arr) {
            return val.selected === true;
        });

        if (selectedLegislators.length === 0) {
          $scope.legislatorRequiredMessage = 'You must select at least one legislator above.'
        } else {
          $scope.legislatorRequiredMessage = '';
          $scope.newFax.legislatorList = selectedLegislators;
          // console.log($scope.newFax);
          FaxModel.create($scope.newFax).then(function(){
            console.log(FaxModel.getAll());
              //reinitialize
              // $scope.newFax.name = "";
              // $scope.newFax.email = "";
              // $scope.newFax.faxContent = "";
              // $scope.newFax.legislatorList = [];

          });
        }
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

    $scope.includeOffice = function(office) {
      var i = _.indexOf($scope.officeIncludes, office);
      if (i > -1)
        $scope.officeIncludes.splice(i, 1);
      else
        $scope.officeIncludes.push(office);
    };

    $scope.partyFilter = function(legislator) {
      if ($scope.partyIncludes.length > 0) {
        if (_.indexOf($scope.partyIncludes, legislator.party) < 0)
          return;
      }
      return legislator;
    };

    $scope.officeFilter = function(legislator) {
      if ($scope.officeIncludes.length > 0) {
        if (_.indexOf($scope.officeIncludes, legislator.title) < 0)
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

    // this way would maintain an array of selected legislators as they are
    // selected and unselected, faster if not many legislators selected
    // but slow worst case when many selectedLegislators.length is big

    $scope.selectLegislator = function(legislator) {
      legislator.selected = !legislator.selected;
      // var i = _.indexOf($scope.selectedLegislators, legislator);
      // if (legislator.selected)
      //   $scope.selectedLegislators.push(legislator);
      // else
      //   $scope.selectedLegislators.splice(i, 1);
    }

    $scope.getClass = function(legislator) {
      var klass = legislator.selected ? 'selected' : '';
      return klass += legislator.party === 'D' ? ' info'
                    : legislator.party === 'R' ? ' danger' : ' warning';
    };
});
