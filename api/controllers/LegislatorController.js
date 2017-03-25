/**
 * LegislatorController
 *
 */

var _ = require('lodash');
var request = require('request');
var rp = require('request-promise');

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
						//console.log(model);
						//do a db for manual update..
						//if (fax!=null){legislators.push(model);}
						legislators.push(model);
				}
	    	}
			res.json(legislators);
		});
	},

	getByLocation: function(lat, lng){
		var lat = req.query.lat;
		var lng = req.query.lng;
		var stateModel= {
			url: 'http://openstates.org/api/v1/legislators/geo/?lat='+lat+'&long='+lng+'&active=true&apikey=c16a6c623ee54948bac2a010ea6fab70',
			json: true
		};
		var federalModel = {
			url: 'http://congress.api.sunlightfoundation.com/legislators/locate?latitude='+lat+'&longitude='+lng+'&per_page=all&apikey=c16a6c623ee54948bac2a010ea6fab70',
			json: true
		};
		rp(stateModel).then(function(stateRepresentatives){
			return [rp(federalModel), stateRepresentatives];
		}).spread(function(federalRepresentatives, stateRepresentatives) {
			return [federalRepresentatives.results, stateRepresentatives];
		}).then(function(representatives){
			var federalRepresentatives = representatives[0];
			res.json(federalRepresentatives);
			//var stateRepresentatives = representatives[1];
			//var bioguide_id = federalRepresentatives.map(function(obj){return obj.bioguide_id});
			//var leg_id = stateRepresentatives.map(function(obj){return obj.leg_id});
			//User.find({bioguide_id:bioguide_id}).then(function(federalRepresentatives){
				//var federalRepresentativesModel = federalRepresentatives;
				//representatives.concat(federalRepresentatives);
				//User.find({leg_id:leg_id}).then(function(stateRepresentatives){
					//var representatives = federalRepresentativesModel.concat(stateRepresentatives)
					//res.json(representatives)
		    	//});
	    	//});
		}).catch(function(err) {console.log(err)});	
	},

}
