angular.module( 'novo.contact', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contact', {
		url: '/contact',
		views: {
			"main": {
				controller: 'ContactCtrl',
				templateUrl: 'contact/index.tpl.html'
			}
		}
	});
})

.controller( 'ContactCtrl', function AboutController( $scope, titleService ) {
	titleService.setTitle('Contact - NOVO');
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});