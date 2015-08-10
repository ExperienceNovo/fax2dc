angular.module( 'novo.intro', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'intro', {
		url: '/intro',
		views: {
			"main": {
				controller: 'IntroCtrl',
				templateUrl: 'intro/index.tpl.html'
			}
		}
	});
})

.controller( 'IntroCtrl', function AboutController( $scope, titleService ) {
	titleService.setTitle('Intro - NOVO');
});

/* DONT REALLY KNOW WHAT TO DO HERE *** TREVOR HAAALLLPPP */