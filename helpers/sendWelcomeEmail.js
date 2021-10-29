// require sendEmail
const emailSender = require('./services/emailSender');

const organizationsService = require('./services/organizations');

// Send a welcome mail to an email given
export function sendWelcomeEmail(email, organizationId) {
  const organization = organizationsController.getById(organizationId);
  let subject = "Welcome to " + organization.name;
  let html = ejs.render('welcomeEmail', {organization: this.organization});
  emailSender(email, subject, html);
}
