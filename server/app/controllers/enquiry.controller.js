const { sendEnquiryUserEmail, sendEnquiryAdminEmail } = require('../services/email.service');

const submitEnquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, industry, subject, requirements } = req.body;

    // Reference ID logic
    const referenceId = Date.now().toString().slice(-6);
    const year = new Date().getFullYear();
    const consultationUrl = 'https://talentfrontier.com.au/consultation';
    const fullName = `${firstName} ${lastName}`;
    const timestamp = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });

    const emailData = {
      firstName,
      lastName,
      email,
      phone,
      company,
      industry,
      subject,
      requirements,
      referenceId,
      year,
      consultationUrl,
      fullName,
      timestamp
    };

    // Send the email to user
    await sendEnquiryUserEmail(emailData);
    
    // Send the email to admin
    await sendEnquiryAdminEmail(emailData);

    res.status(200).json({ success: true, message: 'Enquiry submitted successfully', referenceId });
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'Failed to process enquiry' });
  }
};

module.exports = {
  submitEnquiry
};
