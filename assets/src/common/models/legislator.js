angular.module('models.legislator', ['lodash', 'services', 'sails.io',])

.service('LegislatorModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('legislator');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByLocation = function(lat, lng) {
        var url = utils.prepareUrl('legislator/location');
        var query = {params:{lat:lat, lng:lng}};
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.getOne = function(model) {
        var url = utils.prepareUrl('legislator/'+model);
        return $sailsSocket.get(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);