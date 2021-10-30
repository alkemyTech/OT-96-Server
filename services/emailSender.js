const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
const emailSender = (email, subject, text, html) => {
  const msg = {
    to: email,
    from: 'alexis10893123@hotmail.com',
    subject: subject,
    text: text,
    html: html,
  };
  sendgridMail
    .send(msg)
    .then(() => {
      console.log({ msg: 'Email sent successfully!' });
    })
    .catch((error) => {
      console.error({ error: error, msg: 'Email sent failed' });
    });
};

module.exports = { emailSender };
