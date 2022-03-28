const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRIP_API_KEY);

const sendEmail = async (req, res) => {
	const body = JSON.parse(req.body);

	const validateHuman = async token => {
		const secret = process.env.RECAPTCHA_SECRET_KEY;

		const response = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
			{
				method: 'POST',
			}
		);

		const data = await response.json();

		return data.success;
	};

	const human = await validateHuman(body.token);

	if (!human) {
		res.status(400).json({
			errors: ['Please, you are not fooling us, bot.'],
		});
		return;
	}

	const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Phone: ${body.phone}\r\n
  Message: ${body.message}
`;

	const data = {
		to: 'info@roysheppard.digital',
		from: {
			email: 'info@roysheppard.digital',
			name: body.name,
		},
		replyTo: body.email,
		subject: 'Customer Enquiry',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	};

	try {
		await mail.send(data);

		res.status(201).json({ status: 'ok' });
	} catch (error) {
		console.log(error);
	}
};

export default sendEmail;
