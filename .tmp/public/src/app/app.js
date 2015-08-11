angular.module( 'novo', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'ui.bootstrap',
    'templates-app',
    'services',
    'models',
    'novo.sidebar',
    'novo.home',
    'novo.about',
    'novo.blog',
    'novo.contact',
    'novo.portfolio',
    'novo.intro'
    //'uiGmapgoogle-maps'
    //'novo.blog-post'

])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/blog/', '/blog');
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

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});