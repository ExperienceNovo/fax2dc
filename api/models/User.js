module.exports = {
    attributes: {
        email: {
            type: 'email',
            required: true
        },
        verifyToken: {
            type: 'string'
        },
        passports : { collection: 'Passport', via: 'user' }
    },

    getAll: function() {
        return User.find()
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return User.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};