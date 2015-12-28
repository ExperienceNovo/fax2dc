angular.module( 'novo.dashboard', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		views: {
			"main": {
				controller: 'DashboardCtrl',
				templateUrl: 'dashboard/index.tpl.html'
			}
		}
	});
})

.controller( 'DashboardCtrl', function DashboardController( $scope, congig, $http, titleService, uiGmapGoogleMapApi ) {
	titleService.setTitle('Dashboard - NOVO');
    $scope.currentUser = config.currentUser;


});