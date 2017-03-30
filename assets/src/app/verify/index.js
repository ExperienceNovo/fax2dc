angular.module( 'fax2dc.verify', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'verify', {
		url: '/verify/:id',
		views: {
			"main": {
				controller: 'VerifyCtrl',
				templateUrl: 'verify/index.tpl.html'
			}
		},
		resolve:{
			fax: ['$stateParams','FaxModel', function($stateParams, FaxModel) {
				return FaxModel.getOne($stateParams.id);
			}]
		}
	});
}])

.controller( 'VerifyCtrl', [ '$location', '$scope', '$stateParams', 'fax', 'FaxModel', 'titleService', function VerifyController( $location, $scope, $stateParams, fax, FaxModel, titleService ) {
	titleService.setTitle('About - Fax2DC');
	$scope.fax = fax;
	if ($scope.fax.isVerified){$location.path('/fax/'+$stateParams.id)};
	$scope.renderHtml = function (htmlCode) {return $sce.trustAsHtml(htmlCode);};
	FaxModel.verify($stateParams.id);
	$scope.verify = function(){
		FaxModel.verify($stateParams.id);
		$location.path('/fax/'+$stateParams.id);
	};
}]);