/**
* Task.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        content: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user',
            required: true
        }
    },

    getAll: function() {
        return Task.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Task.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};

