const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const emailSender = require('./emailSender');

const send = async (email, name) => {
	const templatePath = path.join(__dirname, '..', 'views', 'addContact.html');
	const template = fs.readFileSync(templatePath, 'utf8');
	const templateEjs = ejs.compile(template);
	const contents = templateEjs({
		email: email,
		name: name
	});

	emailSender.send(email, contents);
};

module.exports = { send };
