angular.module( 'novo.dashboard', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		views: {
			"main": {
				controller: 'DashboardCtrl',
				templateUrl: 'dashboard/index.tpl.html'
			}
		},
		resolve:{
			members: function(UserModel) {
                return UserModel.getAll();
            },
			entries: function(EntryModel) {
                return EntryModel.getAll();
            },
			tasks: function(TaskModel) {
                return TaskModel.getAll();
            },
		}
	});
})

.controller( 'DashboardCtrl', function DashboardController( $scope, config, $http, titleService, members, entries, tasks, EntryModel, TaskModel ) {
	titleService.setTitle('Dashboard - NOVO');
    $scope.currentUser = config.currentUser;
    $scope.members = members;
    $scope.entries = entries;
    $scope.tasks = tasks;
	$scope.newEntry = {};
	$scope.newTask = {};

    $scope.newEntryToggleFunction = function () {
		$scope.newEntryToggle = $scope.newEntryToggle ? false : true;
	};

	$scope.createEntry = function(newEntry) {
        newEntry.user = config.currentUser.id;
        EntryModel.create(newEntry).then(function(model) {
            $scope.newEntry = {};
        });
    };

    $scope.newTaskToggleFunction = function () {
		$scope.newTaskToggle = $scope.newTaskToggle ? false : true;
	};

	$scope.createTask = function(newTask) {
        newTask.user = config.currentUser.id;
        TaskModel.create(newTask).then(function(model) {
            $scope.newTask = {};
        });
    };


});