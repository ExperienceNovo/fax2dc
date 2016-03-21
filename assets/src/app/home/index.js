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
	titleService.setTitle('Fax2DC');
	$scope.currentUser = config.currentUser;
});