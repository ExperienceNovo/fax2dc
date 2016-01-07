angular.module('models.entry', ['lodash', 'services', 'sails.io',])

.service('EntryModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('entry');
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('entry');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('entry/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});