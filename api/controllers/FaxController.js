/**
 * FaxController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');
var Phaxio = require('phaxio'),
phaxio = new Phaxio('7ecfca62ffeb3d94703e64060673331d507e099a', '40fcd093885df4547301829fbc63723329e489d4');
	
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
		Fax.getOne(req.param('id'))
		.spread(function(model) {
			Fax.subscribe(req, model);
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
		//save for verified...
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

		console.log(req.body);

		var legislatorList = req.param('legislatorList')
		for (x in legislatorList){

			var model = {
				name: req.param('name'),
				email: req.param('email'),
				faxContent: req.param('faxContent'),
				legislator: legislatorList[x]
			};

			Fax.create(model)
			.exec(function(err, model) {
				if (err) {
					return console.log(err);
				}
				else {
					Fax.publishCreate(model);
					var emailModel = model;
					emailModel.link = 'http://www.fax2dc.com/verify/' + model.id;
					emailService.sendTemplate('verify', req.param('email'), 'Verify your email -- Direct your impact -- FAX2DC', emailModel);
					//res.json(fax);
				}
			});

			//3cents per page.
			/*console.log(legislatorList[x])
			phaxio.sendFax({
			  to: legislatorList[x].fax,
			  string_data: model.faxContent,
			  string_data_type: 'html'
			},
			function(err, data){
				console.log(err)
				console.log(data);
			});*/

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

	verify: function(req, res) {
		Fax.find({id:req.param('id')})
		.then(function(model){
			model.isVerified = true;
			emailService.sendTemplate('sent', model.email, 'Fax Sent! -- Direct your impact -- FAX2DC', model);
			Fax.update({id: model.id}, model);
			phaxio.sendFax({
			  to: legislatorList[x].fax,
			  string_data: model.faxContent,
			  string_data_type: 'html'
			});
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},



};
