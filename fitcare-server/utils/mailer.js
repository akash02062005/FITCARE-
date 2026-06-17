const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 's.akash02062005@gmail.com',
    pass: 'rsyc jjef qfyg ushj' 
  }
});

const sendConfirmationEmail = async (to, name) => {
  await transporter.sendMail({
    from: '"FitCare Support" <s.akash02062005@gmail.com>',
    to,
    subject: "📩 We've received your message!",
    html: `
      <h3>Hello ${name},</h3>
      <p>Thank you for contacting <strong>FitCare</strong>! Our team will get back to you soon.</p>
      <p>Stay fit 💪</p>
      <hr />
      <p><em>This is an automated confirmation.</em></p>
    `
  });
};

module.exports = sendConfirmationEmail;

