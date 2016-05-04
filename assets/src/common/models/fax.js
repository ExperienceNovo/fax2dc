angular.module('models.fax', ['lodash', 'services', 'sails.io',])

.service('FaxModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('fax');
        return $sailsSocket.get(url).then(success, error);
    };

    this.count = function(newModel) {
        var url = utils.prepareUrl('fax/count');
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('fax');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});