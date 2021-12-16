export default function (req, res) {
	require("dotenv").config();
	const PASSWORD = process.env.PASSWORD;

	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: process.env.from_email,
			pass: PASSWORD,
		},
		secure: true,
	});
	const mailData = {
		from: process.env.from_email,
		to: process.env.to_email,
		subject: "Requested Help",
		text: req.body.message,
		html: `<div>${req.body.message}</div>`,
	};
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
	res.status(200);
}
