// require sendEmail
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const emailSender = require('./emailSender');
const organizationsService = require('./organizations');

// Send a welcome mail to an email given
const send = async (email, organizationId) => {
	const organization = await organizationsService.getById(organizationId);
	const templatePath = path.join(__dirname, '..', 'views', 'welcomeEmailTemplate.html');

	const template = fs.readFileSync(templatePath, 'utf8');

	const templateEjs = ejs.compile(template);

	const contents = templateEjs({
		phone: organization.phone,
		emailOrganization: organization.email,
		title: organization.welcomeText,
		textEmail: organization.aboutUsText
	});

	emailSender.send(email, contents);
};

module.exports = { send };
