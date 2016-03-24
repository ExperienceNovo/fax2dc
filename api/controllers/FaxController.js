/**
 * FaxController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	// getAll: function(req, res) {
	// 	Post.getAll()
	// 	.spread(function(models) {
	// 		Post.watch(req);
	// 		Post.subscribe(req, models);
	// 		res.json(models);
	// 	})
	// 	.fail(function(err) {
	// 		// An error occured
	// 	});
	// },
	//
	// getOne: function(req, res) {
	// 	Post.getOne(req.param('id'))
	// 	.spread(function(model) {
	// 		Post.subscribe(req, model);
	// 		res.json(model);
	// 	})
	// 	.fail(function(err) {
	// 		res.send(404);
	// 	});
	// },
	//
	// update: function(req, res) {
	// 	var id = req.param('id');
	// 	var userId = req.param('user');
	//
	// 	var model = {
	// 		title: req.param('title'),
	// 		url_title: req.param('url_title'),
	// 		post_content: req.param('post_content'),
	// 		user: userId
	// 	};
	//
	// 	Post.update( {id: id}, model).exec(function afterwards(err, updated){
	// 	  if (err) {
	// 	    return;
	// 	  }
	// 	});
	// },
	//
	// getByUrlTitle: function(req, res) {
	// 	Post.find()
	// 	.where({url_title: req.param('path')})
	// 	.spread(function(model) {
	// 		Post.subscribe(req, model);
	// 		res.json(model);
	// 	})
	// 	.fail(function(err) {
	// 		res.send(404);
	// 	});
	// },

	create: function (req, res) {
		//var userId = req.param('user');
		console.log('hi from controller.create!')
		var model = {
			name: req.param('name'),
			email: req.param('email'),
			fax_content: req.param('fax_content'),
			//user: userId
			legislators: req.param('legislators')
		};

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
	},

	// destroy: function (req, res) {
	// 	var id = req.param('id');
	// 	if (!id) {
	// 		return res.badRequest('No id provided.');
	// 	}
	//
	// 	// Otherwise, find and destroy the model in question
	// 	Post.findOne(id).exec(function(err, model) {
	// 		if (err) {
	// 			return res.serverError(err);
	// 		}
	// 		if (!model) {
	// 			return res.notFound();
	// 		}
	//
	// 		Post.destroy(id, function(err) {
	// 			if (err) {
	// 				return res.serverError(err);
	// 			}
	//
	// 			Post.publishDestroy(model.id);
	// 			return res.json(model);
	// 		});
	// 	});
	// }

};
