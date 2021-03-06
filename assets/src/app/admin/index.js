angular.module( 'fax2dc.admin', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'admin', {
		url: '/admin',
		views: {
			"main": {
				controller: 'AdminCtrl',
				templateUrl: 'admin/index.tpl.html'
			}
		},
		resolve:{
			faxes: ['FaxModel', function(FaxModel) {
				return FaxModel.getUnApproved();
			}]
		}
	});
}])

.controller(['$location', '$scope', 'config', 'faxes', 'FaxModel', 'titleService', function AdminCtrl($location, $scope, config, faxes, FaxModel, titleService ) {
	titleService.setTitle('Admin - Fax2DC');
	//if(!config.currentUser){$location.path('/')}
	$scope.faxes = faxes;
	$scope.approve = function(fax){
		fax.isApproved = true;
		FaxModel.update(fax);
	};
}]);