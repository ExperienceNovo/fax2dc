angular.module( 'novo.blog', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'post', {
		url: '/blog',
		views: {
			"main": {
				controller: 'BlogCtrl',
				templateUrl: 'blog/index.tpl.html'
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

.controller( 'BlogCtrl', function BlogController( $scope, $sailsSocket, lodash, titleService, config, PostModel, posts) {
	titleService.setTitle('Blog - NOVO');
	$scope.newPost = {};
    $scope.posts = posts;
    $scope.currentUser = config.currentUser;

   	$scope.test_posts = {
   		"NOVO": {
	        "title": "The NOVO experience",
	        "post_content": "",
	        "url_title": "the-novo-experience"
    	},
    	"transparent-collaboration": {
	        "title": "Transparent Collaboration",
	        "post_content": "",
	        "url_title": "transparent-collaboration"
    	},
    	"how-we-design": {
	        "title": "How We Design",
	        "post_content": "",
	        "url_title": "how-we-design"
    	},
    	"cool-css-effects": {
	        "title": "Cool CSS effects",
	        "post_content": "",
	        "url_title": "cool-css-effects"
    	},
    	"our-web-stack": {
	        "title": "Our Web Stack",
	        "post_content": "",
	        "url_title": "our-web-stack"
    	},
    	"social-media-growth-strategies": {
	        "title": "Social Media Growth Strategies",
	        "post_content": "",
	        "url_title": "social-media-growth-strategies"
    	},
    };


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









