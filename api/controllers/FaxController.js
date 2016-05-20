/**
 * FaxController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Fax.getAll()
		.spread(function(models) {
			Fax.watch(req);
			Fax.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Post.getOne(req.param('id'))
		.spread(function(model) {
			Post.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getUnapproved: function(req, res) {
		Fax.find()
		.where({isApproved:false})
		.then(function(models){
			res.json(models);
		})
		.catch(function(err){
			console.log(err);
		})
	},

	getCount: function(req, res) {
		Fax.count()
		.exec(function(err, faxCount) {
			if (!err){
				Fax.watch(req);
				res.json({ count: faxCount });
			}
		});
	},

	getByLegislator: function(req, res) {
		//Fax.find()
		//.where()
	},


	create: function (req, res) {

		//we need to make a new fax object per selected legislator and not store an array... ?? maybe..?? 
		//or have a list of legislators stored in the db.. save them as a related model
		//since we have to pay 7cents per page.. lets think about it. 

		var legislatorList = req.param('legislatorList')

		for (x in legislatorList){
			console.log(legislatorList[x])

			var model = {
				name: req.param('name'),
				email: req.param('email'),
				faxContent: req.param('faxContent'),
				legislator: legislatorList[x]
			};

			Fax.create(model)
			.exec(function(err, fax) {
				if (err) {
					return console.log(err);
				}
				else {
					Fax.publishCreate(fax);
					//res.json(fax);
				}
			});

			//7cents per page... too much
			//var Phaxio = require('phaxio'),
			//  phaxio = new Phaxio('e222........................', '62e5........................'),
			//  callback = function(err,data){console.log(data);};

			//phaxio.sendFax({
			//    to: '13165555555',
			//  string_data: 'Faxing from Node.js',
			//  string_data_type: 'text'
			//},callback);

		}

	},

	update: function(req, res) {
		var model = {
			id: req.param('id'),
		}
		if (req.param('isApproved')){
			model.isApproved = true
		}
		Fax.update({id: req.param('id')}, model)
		.then(function(result){
			return res.json(result);
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},



};
