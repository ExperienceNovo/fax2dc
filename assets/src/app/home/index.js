angular.module( 'fax2dc.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/index.tpl.html'
            }
        },
        resolve: {
            faxCount: ['FaxModel', function(FaxModel) {
                return FaxModel.count();
            }]
        }
    });
}])
.controller('HomeCtrl', ['$location', '$sailsSocket', '$scope', '$stateParams', '$uibModal', 'config', 'faxCount', 'FaxModel', 'LegislatorModel', 'titleService', function HomeController( $location, $sailsSocket, $scope, $stateParams, $uibModal, config, faxCount, FaxModel, LegislatorModel, titleService) {
    titleService.setTitle('FAX2DC');
    $scope.loading = true;
    $scope.legislators = [];
    LegislatorModel.getAll().then(function(legislators){
      $scope.loading = false;
      $scope.legislators = legislators;
      console.log(legislators)
      $scope.stateAbrvs = _.uniq($scope.legislators.map(function(curr, val, index) {
        return curr.state;
      })).sort();
    });
    $scope.faxCount = faxCount.count;
    $scope.newFax = {}
    $scope.partyIncludes = [];
    $scope.titleIncludes = [];
    $scope.reverse = false;
    $scope.sortField = 'state';
    $scope.showSelected = false;
    $scope.legislatorRequiredMessage = '';
    $scope.confirm='';

    $scope.getLegislators = function() {
        if (navigator.geolocation) {
            $scope.loading = true;
            //$rootScope.stateIsLoading = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude; 
                lng = position.coords.longitude;
                LegislatorModel.getByLocation(lat, lng).then(function(representatives){
                    console.log(representatives);
                    $scope.officialRepresentatives = representatives.map(function(obj){return obj.bioguide_id});
                    $scope.loading = false;
                    for (x in $scope.officialRepresentatives){
                      var index = $scope.legislators.map(function(e) { return e.bioguide_id; }).indexOf($scope.officialRepresentatives[x]);
                      $scope.selectLegislator($scope.legislators[index]);
                    }
                });
            });
        }
    };

    $scope.submitFax = function() {
        if ($scope.newFax.trap !== undefined){
            console.log('get out'); // display fake successful form submission
        }
        else {
            var selectedLegislators = $scope.legislators.filter(function(val, ind, arr) {
                return val.selected === true;
            });

            if (selectedLegislators.length === 0) {
                $scope.validationMessage = 'You must select at least one legislator above.'
            } 
            else if (selectedLegislators.length >= 8) {
                $scope.validationMessage = 'You can only select a max of 8 legislators at once'
            } 
            else if (!$scope.newFax.faxContent) {
                $scope.validationMessage = 'Say Something!';
            } 
            else if (!$scope.newFax.name) {
                $scope.validationMessage = 'where\'s your name?';
            } 
            else if (!$scope.newFax.email) {
                $scope.validationMessage = 'where\'s your email?';
            } 

            else {
                $scope.validationMessage = '';
                $scope.newFax.legislatorList = selectedLegislators;
                $scope.openConfirmation();
            }
        }
    };

    $scope.changeSorting = function(field) {
      $scope.reverse = $scope.sortField === field ? !$scope.reverse : false;
      $scope.sortField = field;
    };

    $scope.includeParty = function(party) {
      var i = _.indexOf($scope.partyIncludes, party);
      if (i > -1){
        $scope.partyIncludes.splice(i, 1);
      }
      else{
        $scope.partyIncludes.push(party);
      }
    };

    $scope.includeTitle = function(title) {
      var i = _.indexOf($scope.titleIncludes, title);
      if (i > -1){
        $scope.titleIncludes.splice(i, 1);
      }
      else{
        $scope.titleIncludes.push(title);
      }
    };

    $scope.partyFilter = function(legislator) {
      if ($scope.partyIncludes.length > 0) {
        if (_.indexOf($scope.partyIncludes, legislator.party) < 0){
          return;
        }
      }
      return legislator;
    };

    $scope.titleFilter = function(legislator) {
      if ($scope.titleIncludes.length > 0) {
        if (_.indexOf($scope.titleIncludes, legislator.title) < 0)
          return;
      }
      return legislator;
    };

    $scope.selectedFilter = function(legislator) {
      if ($scope.showSelected) {
        if (legislator.selected === true){
          return legislator;
        }
        return;
      } 
      else {
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
      return klass += legislator.party === 'D' ? ' democrat'
                    : legislator.party === 'R' ? ' republican' : 'independant';
    };

    $scope.openConfirmation = function (size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'home/confirmation.tpl.html',
            controller: 'ConfirmationModalInstanceCtrl',
            size: size,
            resolve: {
                newFax: function () {
                    return $scope.newFax;
                },
            }
        })
        .result
        .then(function (newFax) {
          $scope.newFax = {}
          $scope.confirm = 'please confirm your email to send your fax!';
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $sailsSocket.subscribe('fax', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                FaxModel.count().then(function(faxCount){
                  $scope.faxCount = faxCount.count
                });
                break;
        }
    });

}])
.controller('ConfirmationModalInstanceCtrl', ['$scope', '$uibModalInstance', 'FaxModel', 'newFax', function ($scope, $uibModalInstance, FaxModel, newFax) {
    $scope.newFax = newFax;
    $scope.ok = function () {
        FaxModel.create($scope.newFax);
        $uibModalInstance.close($scope.newFax);
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);