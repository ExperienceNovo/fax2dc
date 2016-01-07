/**
 * EntryController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Entry.getAll()
		.spread(function(models) {
			Entry.watch(req);
			Entry.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Entry.getOne(req.param('id'))
		.spread(function(model) {
			Entry.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			type: req.param('type'),
			title: req.param('type'),
			amount: req.param('amount'),
			user: userId
		};

		Entry.create(model)
		.exec(function(err, entry) {
			if (err) {
				return console.log(err);
			}
			else {
				Entry.publishCreate(entry);
				res.json(entry);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Entry.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Entry.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Entry.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

