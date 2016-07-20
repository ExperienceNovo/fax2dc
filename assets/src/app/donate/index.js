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

.controller( 'DonateCtrl',[ '$scope', '$http', 'titleService', 'uiGmapGoogleMapApi', function DonateController( $scope, $http, titleService, uiGmapGoogleMapApi ) {
	titleService.setTitle('Donate - Fax2DC');
}]);