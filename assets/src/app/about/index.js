angular.module( 'fax2dc.about', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
})

.controller( 'AboutCtrl', ['$scope', '$http', 'titleService', 'uiGmapGoogleMapApi', function AboutController( $scope, $http, titleService, uiGmapGoogleMapApi ) {
	titleService.setTitle('About - Fax2DC');
}]);