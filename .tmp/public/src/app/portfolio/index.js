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
	titleService.setTitle('Portfolio');
});