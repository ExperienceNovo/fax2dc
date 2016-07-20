angular.module( 'fax2dc.admin', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'admin', {
		url: '/admin',
		views: {
			"main": {
				controller: 'AdminCtrl',
				templateUrl: 'admin/index.tpl.html'
			}
		},
		resolve:{
			faxes: function(FaxModel){
				return FaxModel.getUnApproved();
			}
		}
	});
})

.controller( 'AdminCtrl',['config', 'faxes', 'FaxModel', '$location', '$scope', 'titleService', function AdminCtrl(config, faxes, FaxModel, $location, $scope, titleService ) {
	titleService.setTitle('Admin - Fax2DC');
	//if(!config.currentUser){$location.path('/')}
	$scope.faxes = faxes;
	$scope.approve = function(fax){
		fax.isApproved = true;
		FaxModel.update(fax);
	};
}]);