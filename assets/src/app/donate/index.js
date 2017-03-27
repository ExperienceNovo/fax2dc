angular.module( 'fax2dc.donate', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'donate', {
		url: '/donate',
		views: {
			"main": {
				controller: 'DonateCtrl',
				templateUrl: 'donate/index.tpl.html'
			}
		},
        resolve: {
            faxCount: ['FaxModel', function(FaxModel) {
                return FaxModel.count();
            }],
        }
	});
}])

.controller( 'DonateCtrl',['$scope', 'faxCount', 'titleService', function DonateController($scope, faxCount, titleService ) {
	titleService.setTitle('Donate - Fax2DC');
	$scope.faxCount = faxCount;
}]);