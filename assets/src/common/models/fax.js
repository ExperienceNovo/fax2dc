angular.module('models.fax', ['lodash', 'services', 'sails.io',])

.service('FaxModel', function(lodash, utils, $sailsSocket) {
    // this.getAll = function() {
    //     var url = utils.prepareUrl('fax');
    //     return $sailsSocket.get(url).then(success, error);
    // };

    this.create = function(newModel) {
        var url = utils.prepareUrl('fax');
        //console.log(newModel)
        return $sailsSocket.post(url, {will: 'work?'}, function(resData, jwres) {
          console.log('callback: ' + resData + jwres);
        }/*newModel*/).then(success, error);
    };

    // this.update = function(newModel) {
    //     var url = utils.prepareUrl('fax/' + newModel.id);
    //     return $sailsSocket.post(url, newModel).then(success, error);
    // };
    //
    // this.delete = function(model) {
    //     var url = utils.prepareUrl('fax/' + model.id);
    //     return $sailsSocket.delete(url).then(success, error);
    // };

    var success = function(response) {
        console.log(response)
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
});
