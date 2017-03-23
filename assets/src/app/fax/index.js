angular.module( 'fax2dc.fax', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'fax', {
		url: '/fax/:id',
		views: {
			"main": {
				controller: 'FaxCtrl',
				templateUrl: 'fax/index.tpl.html'
			}
		},
		resolve:{
			fax: ['$stateParams','FaxModel', function($stateParams, FaxModel) {
				return FaxModel.getOne($stateParams.id);
			}]
		}
	});
}])

.controller( 'FaxCtrl',['$scope', 'fax', 'titleService', function DonateController( $scope, fax, titleService ) {
	titleService.setTitle('Fax - Fax2DC');
	$scope.fax = fax;
}]);