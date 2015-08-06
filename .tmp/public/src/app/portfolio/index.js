angular.module( 'novo.portfolio', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'portfolio', {
		url: '/portfolio',
		views: {
			"main": {
				controller: 'PortfolioCtrl',
				templateUrl: 'portfolio/index.tpl.html'
			}
		}
	});
})

.controller( 'PortfolioCtrl', function PortfolioController( $scope, titleService ) {
	titleService.setTitle('Portfolio - NOVO');


	$scope.currently_selected = 'absolute';
	$scope.select_portfolio = function(selected) {
		$scope.currently_selected = selected;
	}  

});