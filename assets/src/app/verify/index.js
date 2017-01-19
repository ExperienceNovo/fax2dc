angular.module( 'fax2dc.verify', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'verify', {
		url: '/verify/:path',
		views: {
			"main": {
				controller: 'VerifyCtrl',
				templateUrl: 'verify/index.tpl.html'
			}
		},
		resolve:{
			fax: function(FaxModel, $stateParams){
				FaxModel.getOne($stateParams.id);
			}
		}
	});
})

.controller( 'VerifyCtrl', [ '$http', '$scope', '$stateParams', 'fax', 'FaxModel', 'titleService', function VerifyController( $http, $scope, $stateParams, fax, FaxModel, titleService ) {
	titleService.setTitle('About - Fax2DC');
	$scope.fax = fax;
	$scope.verify = function(){
		FaxModel.verify($stateParams.id).then(function(){
			$location.path('/');
		});
	};
}]);