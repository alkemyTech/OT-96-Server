const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

const send = async (email, html) => {
	try {
		const msg = {
			to: email,
			from: 'fundacionsomosmas@outlook.com.ar',
			subject: 'Email de bienvenida',
			html: html
		};

		await sendgridMail.send(msg);
		console.log({ msg: 'Email sent successfully!' });
	} catch (error) {
		console.error({ error: error, msg: 'Email sent failed' });
	}
};

module.exports = { send };
