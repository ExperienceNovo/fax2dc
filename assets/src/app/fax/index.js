angular.module( 'fax2dc.fax', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'fax', {
		url: '/fax/:id',
		views: {
			"main": {
				controller: 'FaxCtrl',
				templateUrl: 'fax/index.tpl.html'
			}
		},
		resolve:{
			fax: function(FaxModel, $stateParams){
				return FaxModel.getOne($stateParams.id);
			}
		}
	});
})

.controller( 'FaxCtrl',['$scope', '$http', 'titleService', 'fax', function DonateController( $scope, $http, titleService, fax ) {
	titleService.setTitle('Fax - Fax2DC');
	$scope.fax = fax;
}]);