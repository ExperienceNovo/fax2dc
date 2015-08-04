angular.module( 'novo.blog-post', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'blog-post', {
		url: '/blog/:id',
		views: {
			"main": {
				controller: 'BlogPostCtrl',
				templateUrl: 'blog-post/index.tpl.html'
			}
		}
	});
})

.controller( 'BlogPostCtrl', function BlogPostController( $scope, titleService, $stateParams) {

	console.log($stateParams);

	if ($stateParams == "") {
		return new BlogController();
	}
	else {
		return new BlogPostController();
	}
	
	titleService.setTitle('Blog - NOVO');   

});









