/**
 * FaxController
 *
 */
 
var _ = require('lodash');
var Phaxio = require('phaxio'),
//TEST
//phaxio = new Phaxio('66a159a76ea1af4944f35313e8301cb5255bbe7e', 'e9778ac940f12c59771356f99676a9f93ebca16c');
//LIVE
phaxio = new Phaxio('d7fefc0ec1cf08505312ca9339e89673f8e2147c', 'f9ad188f9abdc8734b58ff744ab9112b68f51ae6');
	
module.exports = {

	getAll: function(req, res) {
		Fax.getAll()
		.spread(function(models) {
			Fax.watch(req);
			Fax.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			res.send(404);
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
		//.find({isVerified:true})
		Fax.count()
		.exec(function(err, faxCount) {
			if (!err){
				Fax.watch(req);
				res.json({ count: faxCount });
			}
		});
	},

	getByLegislator: function(req, res) {
	},

	create: function (req, res) {

		var legislatorList = req.param('legislatorList')
		for (x in legislatorList){
			var model = {
				name: req.param('name'),
				email: req.param('email'),
				faxContent: req.param('faxContent'),
				legislator: legislatorList[x]
			};
			//var html_content = emailService.prepareTemplate('fax', model);
			//model.faxContent = html_content;
			Fax.create(model)
			.exec(function(err, model) {
				if (err) {return console.log(err);}
				else {
					Fax.publishCreate(model);
					var emailModel = model;
					emailModel.link = 'http://www.fax2dc.com/verify/' + model.id;
					emailService.sendTemplate('verify', req.param('email'), 'Verify your email -- Direct your impact -- FAX2DC', emailModel);
				}
			});
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
			if (!model[0].isVerified){
				model[0].isVerified = true;
				Fax.update({id: model[0].id}, model[0]);
				var html_content = emailService.prepareTemplate('fax', model[0]);
				//model[0].faxContent = html_content;
				emailService.sendTemplate('sent', model[0].email, 'Fax Sent! -- Direct your impact -- FAX2DC', model[0]);
				phaxio.sendFax({
					to: model[0].legislator.fax,
					string_data: html_content,
					string_data_type: 'html'
				},
				function(err, data){
					console.log(err)
					console.log(data);
				});
			}
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},

};
