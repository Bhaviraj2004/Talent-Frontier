const nodemailer = require('nodemailer');
const { getEnquiryUserTemplate, getEnquiryAdminTemplate } = require('../utils/template.util');

let transporter;

const initializeTransporter = async () => {
  if (process.env.SMTP_HOST === 'sandbox.smtp.mailtrap.io' && process.env.SMTP_USER === 'your_mailtrap_user') {
    // Generate a test ethereal account if using default dummies
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    console.log("Using Ethereal Email for testing...");
  } else {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
};

initializeTransporter();

const sendEnquiryUserEmail = async (data) => {
  try {
    const htmlContent = getEnquiryUserTemplate(data);

    const info = await transporter.sendMail({
      from: `"Talent Frontier" <${process.env.EMAIL_FROM}>`,
      to: data.email, // send to the user's email
      subject: `Enquiry Confirmation: TF-${data.referenceId}`,
      html: htmlContent,
    });

    console.log('Message sent: %s', info.messageId);
    
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

const sendEnquiryAdminEmail = async (data) => {
  try {
    const htmlContent = getEnquiryAdminTemplate(data);
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@talentfrontier.com.au';

    const info = await transporter.sendMail({
      from: `"Talent Frontier" <${process.env.EMAIL_FROM}>`,
      to: adminEmail, // send to the admin
      subject: `New Inbound Client Mandate: ${data.company || 'New Enquiry'}`,
      html: htmlContent,
    });

    console.log('Admin message sent: %s', info.messageId);
    
    // Preview only available when sending through an Ethereal account
    console.log('Admin Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending admin email:', error);
    throw new Error('Failed to send admin email');
  }
};

module.exports = {
  sendEnquiryUserEmail,
  sendEnquiryAdminEmail
};
