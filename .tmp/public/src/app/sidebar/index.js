angular.module( 'novo.sidebar', [
])

.controller( 'SidebarCtrl', function SidebarController( $scope, $state, $location, $rootScope, config ) {
    $scope.currentUser = config.currentUser;

    if ($location.path() == '/blog'){
        $scope.sidebar_color = 'black';
    }
    else{
        $scope.sidebar_color = 'white';
    }

    $rootScope.$on("$locationChangeStart", function() {
        console.log($location.path());
        if ($location.path() == '/blog'){
            $scope.sidebar_color = 'black';
        }
        else{
            $scope.sidebar_color = 'white';
        }
    });

    var navItems = [
        {title: 'About', translationKey: 'navigation:about', url:'/about',cssClass: 'fa fa-info-circle'},
        {title: 'Contact', translationKey: 'navigation:about', url:'/contact',cssClass: 'fa fa-info-circle'},
    ];

    if (!$scope.currentUser) {
        navItems.push({title: 'Login', translationKey: 'navigation:login', url: '/login', cssClass: 'fa fa-sign-in'});
    }

    $scope.navItems = navItems;
});