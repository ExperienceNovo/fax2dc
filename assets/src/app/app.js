angular.module( 'novo', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'novo.blog',
    'novo.blog-post',
    'novo.contact',
    'novo.home',
    'novo.intro',
    'novo.login',
    'novo.portfolio',
    'novo.register',
    'novo.sidebar'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {

    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/contact/', '/contact');
    $urlRouterProvider.when('/portfolio/', '/portfolio');

    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            // pass through to let the web server handle this request
            window.location = $location.$$absUrl;
        }
    });

    $locationProvider.html5Mode(true);

})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config, $rootScope ) {
    config.currentUser = window.currentUser; 
    $scope.scrollTo = function(div) {
    $location.hash('about-top');
    $anchorScroll();
    }
});

