angular.module( 'novo.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:path',
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},
		resolve:{
			member: function(UserModel, $stateParams) {
                return UserModel.getByUsername($stateParams.path);
            }
		}
	});
})

.controller( 'MemberCtrl', function MemberController( $scope, config, $http, titleService, member, TaskModel) {
	titleService.setTitle('Dashboard - NOVO');
    $scope.member = member;
    TaskModel.getByUser(member.id).then(function(tasks){
    	$scope.tasks = tasks;
    });
});