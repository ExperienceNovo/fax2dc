/**
* Fax.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
				name: {
            type: 'string',
            required: true,
        },
        email: {
            type: 'string',
            required: true,
        },
				fax_content: {
            type: 'string',
            required: true
        },
        legislators: {
            type: 'array',
            required: true
        }
    },

    // afterCreate: function (post, next) {
    //     // set message.user = to appropriate user model
    //     User.getOne(post.user)
    //     .spread(function(user) {
    //         post.user = user;
    //         next(null, post);
    //     });
    // },

    // getAll: function() {
    //     return Post.find()
    //     .sort({createdAt: 'asc'})
    //     .then(function (models) {
    //         return [models];
    //     });
    // },
		//
    // getOne: function(id) {
    //     return Post.findOne(id)
    //     .then(function (model) {
    //         return [model];
    //     });
    // }
};
