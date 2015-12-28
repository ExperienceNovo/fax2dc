/**
* Finance.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        type: {
            type: 'string',
            required: true,
            unique: true
        },
        amount: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user',
            required: true
        }
    },

    getAll: function() {
        return Finance.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Finance.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};

