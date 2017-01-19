/**
 * LegislatorController
 *
 * @description :: Server-side logic for getting legislators
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');
var request = require('request');
// var govTrack = require('govtrack-node');
// var Q = require('q');

module.exports = {
	getAll: function(req, res) {
		var url = "http://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=c16a6c623ee54948bac2a010ea6fab70";
		request({
			    url: url,
			    json: true
			}, function (error, response, body) {

			    if (!error && response.statusCode === 200) {
					var congressData = body.results;
					var legislators = [];
					for (var key in congressData) {

						var fax = congressData[key].fax;
						var first_name = congressData[key].first_name;
						var last_name = congressData[key].last_name;
						var party = congressData[key].party;
						var phone = congressData[key].phone;
						var state = congressData[key].state;
						var title = congressData[key].title;
						var email = first_name.replace('.','').replace(' ','.') + '.' + last_name.replace(' ','.') + '@gmail.com';
						var model = {
							first_name: first_name,
							last_name: last_name,
							title: title,
							state: state,
							party: party,
							phone: phone,
							fax: fax,
							email: email,
							title: title
						};
						console.log(model);
						//do a db for manual update..
						//if (fax!=null){legislators.push(model);}
						legislators.push(model);
				}
	    	}

			res.json(legislators);

		});
	}

	/*getAll: function(req, res) {
		Fax.getAll()
		.spread(function(models) {
			Fax.watch(req);
			Fax.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			res.send(404);
		});
	},*/
}
