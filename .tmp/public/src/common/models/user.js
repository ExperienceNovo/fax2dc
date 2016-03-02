angular.module('models.user', ['lodash', 'services', 'sails.io',])

.service('UserModel', function($q, lodash, utils, $sailsSocket, $location, $rootScope) {
    this.getAll = function() {
        var url = utils.prepareUrl('user');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUsername = function(model) {
        var url = utils.prepareUrl('user/username/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getOne = function(id) {
        var deferred = $q.defer();
        var url = utils.prepareUrl('user/' + id);

        $sailsSocket.get(url, function(model) {
            return deferred.resolve(model);
        });

        return deferred.promise;
    };

    this.create = function(newModel) {
        var deferred = $q.defer();
        var url = utils.prepareUrl('user');

        $sailsSocket.post(url, newModel, function(model) {
            return deferred.resolve(model);
        });

        return deferred.promise;
    };

    var success = function(response) {
        if (response.data == undefined){
            $location.path('/');
            $rootScope.$apply()
        }
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});