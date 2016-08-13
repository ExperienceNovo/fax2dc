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

.controller( 'AboutCtrl', [ '$http', '$scope', 'titleService', 'uiGmapGoogleMapApi', function AboutController( $http, $scope, titleService, uiGmapGoogleMapApi ) {
	titleService.setTitle('About - Fax2DC');
}]);