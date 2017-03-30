angular.module( 'fax2dc', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'duScroll',
    'lodash',
    'ui.bootstrap',
    'templates-app',
    'services',
    'models',
    'textAngular',
    'fax2dc.about',
    'fax2dc.admin',
    'fax2dc.donate',
    'fax2dc.fax',
    'fax2dc.home',
    'fax2dc.verify',
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.path();
        var hasTrailingSlash = path[path.length-1] === '/';
        if(hasTrailingSlash) {
            var newPath = path.substr(0, path.length - 1); 
            return newPath; 
        } 
    });
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {window.location = '/';}
        else {window.location = $location.$$absUrl;}
    });
    $locationProvider.html5Mode(true);
}])
.run( function run () {
    moment.locale('en');
})
.controller( 'AppCtrl', ['$scope', 'config', '$rootScope', function AppCtrl ( $scope, config, $rootScope) {
    config.currentUser = window.currentUser;
}]);

