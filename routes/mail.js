const express = require('express');
const Router = express.Router();
const config = require('./../config/config');
const badRequest = require('./../util/request').badRequest;
const goodRequest = require('./../util/request').goodRequest;
const sg = require('sendgrid')(config.sendgrid.key);
const helper = require('sendgrid').mail;

Router.post('/contact', (req, res) => {
	const { email, source } = req.body;
	if (email && source) {
		const add_contact = sg.emptyRequest({
	        method: 'POST',
	        path: '/v3/contactdb/recipients',
	        body: [{ email, source }],
	    });
	    sg.API(add_contact)
	    	.then(resp => {
	    		goodRequest(res)
	    	})
	    	.catch(err => {
	    		console.log(err)
	    		badRequest(res)
	    	})
	} else {
		badRequest(res, 'Wrong data input')
	}
})

module.exports = Router