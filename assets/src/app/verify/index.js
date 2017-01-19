angular.module( 'fax2dc.verify', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/verify/:path',
		views: {
			"main": {
				controller: 'VerifyCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
})

.controller( 'VerifyCtrl', [ '$http', '$scope', 'FaxModel', 'titleService', function VerifyController( $http, $scope, FaxModel, titleService ) {
	titleService.setTitle('About - Fax2DC');
	$scope.verify = function(){
		FaxModel.verify(:path).then(function(){
			$location.path('/');
		});
	}
}]);