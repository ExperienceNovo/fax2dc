angular.module( 'fax2dc', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'fax2dc.about',
    'fax2dc.admin',
    'fax2dc.donate',
    'fax2dc.fax',
    'fax2dc.home',
    'fax2dc.intro'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.when('/about/', '/about');
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

.controller( 'AppCtrl', function AppCtrl ( $scope, config, $rootScope) {
    config.currentUser = window.currentUser;

});

