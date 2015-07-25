angular.module( 'sailng.post', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'post', {
		url: '/post',
		views: {
			"main": {
				controller: 'PostCtrl',
				templateUrl: 'post/index.tpl.html'
			}
		},
		resolve: {
			posts: function(PostModel) {
            	return PostModel.getAll().then(function(models) {
                	return models;
            	});
        	}
		}
	});
})

.controller( 'PostCtrl', function PostController( $scope, $sailsSocket, lodash, titleService, config, PostModel, posts) {
	titleService.setTitle('post');
	$scope.newPost = {};
    $scope.posts = posts;
    $scope.currentUser = config.currentUser;

    $sailsSocket.subscribe('post', function (envelope) {
	    switch(envelope.verb) {
	        case 'created':
	            $scope.posts.unshift(envelope.data);
	            break;
	        case 'destroyed':
	            lodash.remove($scope.posts, {id: envelope.id});
	            break;
	    }
    });

    $scope.destroyMessage = function(post) {
        // check here if this post belongs to the currentUser
        if (post.user.id === config.currentUser.id) {
            PostModel.delete(post).then(function(model) {
                // post has been deleted, and removed from $scope.messages
            });
        }
    };

	$scope.createPost = function(newPost) {
        //newPost.user = config.currentUser.id;
        PostModel.create(newPost).then(function(model) {
            $scope.newPost = {};
        });
        console.log(newPost);
    };

});









