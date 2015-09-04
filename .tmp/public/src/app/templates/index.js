angular.module( 'novo.templates', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'templates', {
		url: '/templates',
		views: {
			"main": {
				controller: 'TemplatesCtrl',
				templateUrl: 'templates/index.tpl.html'
			}
		}
	});
})

.controller( 'TemplatesCtrl', function TemplatesController( $scope, titleService ) {
	titleService.setTitle('Templates - NOVO');
});