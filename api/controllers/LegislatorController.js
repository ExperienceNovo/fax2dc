/**
 * LegislatorController
 *
 */

var request = require('request');
var async = require('async');

module.exports = {
	getAll: function(req, res) {
		var url = "https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json";
		var chambers = ['house', 'senate'];
		var legislators = [];
		async.eachSeries(chambers, function (chamber, nextChamber){
			var model = {
				url: 'https://api.propublica.org/congress/v1/115/' + chamber + '/members.json',
				json: true,
				headers: {'X-API-Key': 'hkxQrlrF0ba6dZdSxJMIC4B60JxKMtmm8GR5YuRx'},
			};
			request(model, function (error, response, body) {
			    if (!error) {
					var congressData = body.results[0].members;
					var nullArray = [];
					for (var key in congressData) {
						var fax = congressData[key].fax;
						var first_name = congressData[key].first_name;
						var last_name = congressData[key].last_name;
						var party = congressData[key].party;
						var phone = congressData[key].phone;
						var state = congressData[key].state;
						var title = congressData[key].title;
						var id = congressData[key].id;
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
							title: title,
							officialId:id
						};
						//console.log(model);
						//do a db for manual update..
						Legislator.findOrCreate({officialId:model.officialId}, model);//.then(function(model){console.log(model)});
						if (fax==null){nullArray.push(model);}
						legislators.push(model);
					}
					process.nextTick(nextChamber);
		    	}
		    	console.log(nullArray.length);
			});
		}, function(err, results) {
			res.json(legislators);
		});
	},

	getByLocation: function(req, res){
		var model = {
			url: 'https://www.googleapis.com/civicinfo/v2/representatives/?key=AIzaSyDuNNenJANprqe8vwdk_v6wuN38EEUkJPs&address='+req.query.lat+','+req.query.lng+'&roles=legislatorlowerbody&roles=legislatorupperbody',
			json: true,
		};
		var modelArray = [];
		request(model, function (error, response, body) {
			console.log(body);
			if(!error){
				console.log(body.officials);
				for (x in body.officials){
					//ID IS ALSO IN PIC URL..
					var first_name = body.officials[x].name.split(' ')[0];
					var last_name = body.officials[x].name.split(' ').slice(-1)[0];
					if (last_name.endsWith('.')){last_name = body.officials[x].name.split(' ')[body.officials[x].name.split(' ').length - 2] + ' ' + body.officials[x].name.split(' ').slice(-1)[0]}
					var model = {first_name:first_name, last_name:last_name};
					console.log(first_name, last_name);
					modelArray.push(model)
				}
				Legislator.find(modelArray).then(function(models){
					console.log(models);
					res.json(models)
				});
			}
		});
	},

}
