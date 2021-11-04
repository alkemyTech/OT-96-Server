const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
const emailSender = async (email, subject, text, html) => {
  try {
    const msg = {
      to: email,
      from: 'fundacionsomosmas@outlook.com.ar',
      subject: subject,
      text: text,
      html: html,
    };

    const result = await sendgridMail.send(msg);
    console.log(result);
    console.log({ msg: 'Email sent successfully!' });
  } catch (error) {
    console.error({ error: error, msg: 'Email sent failed' });
  }
};

module.exports = { emailSender };
