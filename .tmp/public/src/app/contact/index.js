angular.module( 'novo.contact', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contact', {
		url: '/contact',
		views: {
			"main": {
				controller: 'ContactCtrl',
				templateUrl: 'contact/index.tpl.html'
			}
		}
	});
},

function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
}


)

.controller( 'ContactCtrl', function AboutController( $scope, titleService, uiGmapGoogleMapApi ) {
	titleService.setTitle('Contact - NOVO');
	$scope.map = {center: {latitude: 39.2661, longitude: -74.5422 }, zoom: 6 };
	$scope.options = {scrollwheel: false};
	$scope.windowOptions = {visible: false};

	$scope.marker1 = {
		id: 1,
		coords: {
			latitude: 42.0488197,
			longitude: -87.6883857
		},
		options: {
			icon:'/images/tri30.png'
		}
    };

    $scope.marker2 = {
		id: 2,
		coords: {
			latitude: 35.9584634,
			longitude: -83.9250825
		},
		options: {
			icon:'/images/tri30.png'
		}
    };

    $scope.marker3 = {
		id: 3,
		coords: {
			latitude: 35.920959,
			longitude: -79.0392909
		},
		options: {
			icon:'/images/tri30.png'
		}
    };

    $scope.marker4 = {
		id: 4,
		coords: {
			latitude: 40.0047528,
			longitude: -75.1180329
		},
		options: {
			icon:'/images/tri30.png'
		}
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };


	uiGmapGoogleMapApi.then(function(maps) {});

});