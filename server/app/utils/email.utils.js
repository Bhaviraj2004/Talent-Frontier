const nodemailer = require('nodemailer');

const createTransporter = async () => {
  // If SMTP credentials are provided in .env, use them
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Otherwise, create a test account on the fly using Ethereal Email
  console.log('No SMTP credentials found in .env, using Ethereal test account...');
  let testAccount = await nodemailer.createTestAccount();
  
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
};

const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = await createTransporter();
    
    // Default from address based on user, or generic if using Ethereal
    const from = process.env.SMTP_USER || '"Talent Frontier" <no-reply@talentfrontier.com>';

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });

    console.log("Message sent: %s", info.messageId);
    
    // Preview only available when sending through an Ethereal account
    if (info.messageId && !process.env.SMTP_HOST) {
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Could not send email.");
  }
};

module.exports = {
  sendEmail
};
