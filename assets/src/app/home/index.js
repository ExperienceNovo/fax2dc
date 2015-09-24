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

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, $location, $anchorScroll ) {
	titleService.setTitle('NOVO');
	$scope.currentUser = config.currentUser;
  	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
});