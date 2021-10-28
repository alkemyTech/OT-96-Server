// require sendEmail
const sendEmail = require('./helpers/sendEmail');

const organizationsController = require('./controllers/organizations');

// Send a welcome mail to an email given
export function sendWelcomeEmail(email, organizationId) {
  const organization = organizationsController.getById(organizationId);
  let subject = "Welcome to " + organization.name;
  let html = ejs.render('welcomeEmail', {organization: this.organization});
  sendEmail(email, subject, html);
}
