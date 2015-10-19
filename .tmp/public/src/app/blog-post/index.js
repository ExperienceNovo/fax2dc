angular.module( 'novo.blog-post', [
])

.config(function config( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.when('/blog/', '/blog');
	$urlRouterProvider.when('/blog/:path/', '/blog/:path');

	$stateProvider.state( 'blog-post', {
		url: '/blog/:path',
		views: {
			"main": {
				controller: 'BlogPostCtrl',
				templateUrl: 'blog-post/index.tpl.html'
			}
		}
	});
})

.controller( 'BlogPostCtrl', function BlogPostController( $scope, $sce, titleService, $stateParams, $http, $location) {
	titleService.setTitle('Blog - NOVO'); 

	var url = '/api/post/url/' + $stateParams.path;

	$http.get(url).
	    success(function(data, status, headers, config) {
	      $scope.post = data;

	      if (data == ''){
	      	$location.url('blog');
	      };

	    }).
	    error(function(data, status, headers, config) {
    });

	$scope.renderHtml = function (htmlCode) {
	    return $sce.trustAsHtml(htmlCode);
	};

});









