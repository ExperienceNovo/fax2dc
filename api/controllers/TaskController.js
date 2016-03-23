/**
 * TaskController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Task.getAll()
		.spread(function(models) {
			Task.watch(req);
			Task.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Task.getOne(req.param('id'))
		.spread(function(model) {
			Task.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getByUser: function(req, res) {
		Task.find()
		.where({user: req.param('id')})
		.then(function(models) {
			Task.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			res.send(404);
		});
	},


	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			title: req.param('title'),
			content: req.param('content'),
			user: userId
		};

		Task.create(model)
		.exec(function(err, task) {
			if (err) {
				return console.log(err);
			}
			else {
				Task.publishCreate(task);
				res.json(task);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Task.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Task.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Task.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};
