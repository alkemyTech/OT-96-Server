// require sendEmail
const { emailSender } = require('../services/emailSender');
const ejs = require("ejs");

const organizationsService = require('../services/organizations');

// Send a welcome mail to an email given
async function sendWelcomeEmail(email, organizationId) {
  const organization = await organizationsService.getById(organizationId);
  console.log(organization)
  let subject = 'Welcome to ' + organization.name;
  let text = subject;
  let html = ejs.render('welcomeEmail', { organization: this.organization });
  await emailSender(email, subject, text, html);
}

module.exports = { sendWelcomeEmail };
