angular.module( 'novo.home', [])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, lodash ) {
	titleService.setTitle('NOVO');
	$scope.currentUser = config.currentUser;

	$scope.toggle_card = function(card){

		if (card == 'design'){
			$scope.design = $scope.design ? false : true;
		}
		else if (card == 'development'){
			$scope.development = $scope.development ? false : true;
		}
		else if (card == 'marketing'){
			$scope.marketing = $scope.marketing ? false : true;
		}

	}


});