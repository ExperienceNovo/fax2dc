module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },

    ssl: function(req, res) {
        res.send('wuaw9YapGnbIPnGhXYRxlZoka1sYoT9AFF1AoNjlWNE.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    },
    
};