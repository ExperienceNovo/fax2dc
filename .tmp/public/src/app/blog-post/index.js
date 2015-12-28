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

.controller( 'BlogPostCtrl', function BlogPostController( $scope, config, $sce, titleService, $stateParams, $http, $location, PostModel, $location) {
	titleService.setTitle('Blog - NOVO'); 
	$scope.currentUser = config.currentUser;
	$scope.edit = false;

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

	$scope.edit_post_toggle = function () {
		$scope.edit = $scope.edit ? false : true;
	};

	$scope.editPost = function (post) {
		$scope.edit = $scope.edit ? false : true;
        PostModel.update(post).then(function(model) {
            $location.url('blog/' + post.url_title);
        });
   	};


    $scope.destroyPost = function(post) {
        // check here if this post belongs to the currentUser
        //if (post.user.id === config.currentUser.id) {
        PostModel.delete(post).then(function(model) {
            // post has been deleted, and removed from $scope.posts
        	$location.url('blog');

        });

    };

	$scope.renderHtml = function (htmlCode) {
	    return $sce.trustAsHtml(htmlCode);
	};

});









