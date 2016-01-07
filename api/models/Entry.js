/**
* Entry.js
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
        type: {
            type: 'string',
            required: true
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
        return Entry.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Entry.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};

