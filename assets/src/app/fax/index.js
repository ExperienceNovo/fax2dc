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
				return FaxModel.getOne(stateParams.id)
			}
		}
	});
})

.controller( 'FaxCtrl', function DonateController( $scope, $http, titleService, fax ) {
	titleService.setTitle('Donate - Fax2DC');
	$scope.fax = fax
});