/**
 * FaxController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	// getAll: function(req, res) {
	//	Fax.getAll()
	// 	.spread(function(models) {
	// 		Fax.watch(req);
	// 		Fax.subscribe(req, models);
	// 		res.json(models);
	// 	})
	// 	.fail(function(err) {
	// 		// An error occured
	// 	});
	// },
	//
	// getOne: function(req, res) {
	// 	Fax.getOne(req.param('id'))
	// 	.spread(function(model) {
	// 		Fax.subscribe(req, model);
	// 		res.json(model);
	// 	})
	// 	.fail(function(err) {
	// 		res.send(404);
	// 	});
	// },

	create: function (req, res) {

		var model = {
			name: req.param('name'),
			email: req.param('email'),
			faxContent: req.param('faxContent'),
			//user: userId
			legislatorList: req.param('legislatorList')
		};		
		console.log(model);

		Fax.create(model)
		.exec(function(err, fax) {
			if (err) {
				return console.log(err);
			}
			else {
				Fax.publishCreate(fax);
				res.json(fax);
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

		//we can use a hacky solution to send though a free fax api as well.. 

	},

	// destroy: function (req, res) {
	// 	var id = req.param('id');
	// 	if (!id) {
	// 		return res.badRequest('No id provided.');
	// 	}
	//
	// 	// Otherwise, find and destroy the model in question
	// 	Fax.findOne(id).exec(function(err, model) {
	// 		if (err) {
	// 			return res.serverError(err);
	// 		}
	// 		if (!model) {
	// 			return res.notFound();
	// 		}
	//
	// 		Fax.destroy(id, function(err) {
	// 			if (err) {
	// 				return res.serverError(err);
	// 			}
	//
	// 			Fax.publishDestroy(model.id);
	// 			return res.json(model);
	// 		});
	// 	});
	// }

};
