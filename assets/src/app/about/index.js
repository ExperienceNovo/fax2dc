angular.module( 'fax2dc.about', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'ContactCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
},

function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBfn7VlFh9rYu_RQHIc3eUtcrrrm1PkObQ',
        v: '3.17',
        libraries: 'weather,geometry'
    });
}


)

.controller( 'ContactCtrl', function AboutController( $scope, $http, titleService, uiGmapGoogleMapApi ) {
	titleService.setTitle('About - Fax2DC');
	$scope.map = {center: {latitude: 39.443659, longitude: -83.082276 }, zoom: 5 };
	$scope.options = {scrollwheel: false};
	$scope.windowOptions = {visible: false};
    $scope.newEmail = {};

    $scope.toggle_card = function(card){

        if (card == 'raleigh'){
            $scope.raleigh = $scope.raleigh ? false : true;
        }
        else if (card == 'chicago'){
            $scope.chicago = $scope.chicago ? false : true;
        }
        else if (card == 'philadelphia'){
            $scope.philadelphia = $scope.philadelphia ? false : true;
        }
        
    };


	$scope.marker1 = {
		id: 1,
		coords: {
			latitude: 42.0488197,
			longitude: -87.6883857
		},
		options: {
			icon:'/images/fax2dc/tri30.png'
		}
    };

    $scope.marker2 = {
		id: 2,
		coords: {
			latitude: 35.9584634,
			longitude: -83.9250825
		},
		options: {
			icon:'/images/fax2dc/tri30.png'
		}
    };

    $scope.marker3 = {
		id: 3,
		coords: {
			latitude: 35.920959,
			longitude: -79.0392909
		},
		options: {
			icon:'/images/fax2dc/tri30.png'
		}
    };

    $scope.marker4 = {
		id: 4,
		coords: {
			latitude: 40.0047528,
			longitude: -75.1180329
		},
		options: {
			icon:'/images/fax2dc/tri30.png'
		}
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

	var styleArray = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#14b795"
            },
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "saturation": "100"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }	
    ];
	$scope.options = {
	   styles: styleArray, disableDefaultUI: true
	};

	uiGmapGoogleMapApi.then(function(maps) {});

});