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

		}
	});
})

.controller( 'DashboardCtrl', function DashboardController( $scope, config, $http, titleService, members, entries, EntryModel, TaskModel ) {
	titleService.setTitle('Dashboard - NOVO');
    $scope.currentUser = config.currentUser;
    $scope.members = members;
    $scope.entries = entries;
	$scope.newEntry = {};
	$scope.newTask = {};

    $scope.new_entry_toggle = function () {
		$scope.newEntryToggle = $scope.newEntryToggle ? false : true;
	};

	$scope.createEntry = function(newEntry) {
        newEntry.user = config.currentUser.id;
        EntryModel.create(newEntry).then(function(model) {
            $scope.newEntry = {};
        });
    };

    $scope.new_task_toggle = function () {
		$scope.newEntryToggle = $scope.newEntryToggle ? false : true;
	};

	$scope.createTask = function(newTask) {
        newTask.user = config.currentUser.id;
        TaskModel.create(newTask).then(function(model) {
            $scope.newTask = {};
        });
    };


});