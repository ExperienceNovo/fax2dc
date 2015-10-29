module.exports = {
	send: function(req, res) {

		var from = req.param('email');
		var name = req.param('name');
		var message = req.param('message');

		var nodemailer = require('nodemailer');
		var transporter = nodemailer.createTransport({
		    service: 'Gmail',
		    auth: {
		        user: 'experienceNOVO@gmail.com', //new email bc new pass --- yeah
		        pass: 'four4guys'
		    }
		});

		// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: from, // sender address
		    to: 'experienceNOVO@gmail.com', // list of receivers
		    subject: name + ' <'+from+'>', // Subject line
		    text: message // plaintext body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        console.log(error);
		    }
		    else{
		        console.log('Message sent: ' + info.response);
				return res.ok();
		    }
		});

		/*
		var data = {
        	recipientName: "NOVO",
        	senderName: name
    	};
    	var options = {
			from: 'troverman@gmail.com',
        	to: "experienceNOVO@gmail.com",
        	subject: name,
        	html: 'message'
      	};
      	var cb = function(err) {
      		console.log(err || 'hi');
        	if (err) {return res.serverError(err);}
        	return res.ok();
      	};
    	sails.hooks.email.send('', data, options, cb);
    	*/
    	
	}
};

