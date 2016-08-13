angular.module( 'fax2dc.donate', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'donate', {
		url: '/donate',
		views: {
			"main": {
				controller: 'DonateCtrl',
				templateUrl: 'donate/index.tpl.html'
			}
		}
	});
})

.controller( 'DonateCtrl',[ '$http', '$scope', 'titleService', 'uiGmapGoogleMapApi', function DonateController( $http, $scope, titleService, uiGmapGoogleMapApi ) {
	titleService.setTitle('Donate - Fax2DC');
}]);