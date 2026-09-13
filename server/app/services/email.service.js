const { getEnquiryUserTemplate, getEnquiryAdminTemplate } = require('../utils/template.util');
const msal = require('@azure/msal-node');

const msalConfig = {
    auth: {
        clientId: process.env.MICROSOFT_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
        clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    }
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

const getAccessToken = async () => {
    const clientCredentialRequest = {
        scopes: ["https://graph.microsoft.com/.default"],
    };

    try {
        const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);
        return response.accessToken;
    } catch (error) {
        console.error("Error acquiring MSAL access token:", error);
        throw new Error('Failed to acquire Microsoft Graph token');
    }
};

const sendEmailGraphApi = async (toEmail, subject, htmlContent) => {
    const accessToken = await getAccessToken();
    const fromEmail = process.env.MAIL_FROM || 'admin@talentfrontier.com.au';
    
    const mailData = {
        message: {
            subject: subject,
            body: {
                contentType: "HTML",
                content: htmlContent
            },
            toRecipients: [
                {
                    emailAddress: {
                        address: toEmail
                    }
                }
            ]
        },
        saveToSentItems: "true"
    };

    const endpoint = `https://graph.microsoft.com/v1.0/users/${fromEmail}/sendMail`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailData)
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            console.error(`Microsoft Graph API Error: ${response.status} ${response.statusText}`, errData);
            throw new Error(`Graph API failed: ${response.statusText}`);
        }
        
        return { success: true };
    } catch (error) {
        console.error('Error sending email via Graph API:', error);
        throw error;
    }
};

const sendEnquiryUserEmail = async (data) => {
  try {
    const htmlContent = getEnquiryUserTemplate(data);
    const subject = `Enquiry Confirmation: TF-${data.referenceId}`;
    
    await sendEmailGraphApi(data.email, subject, htmlContent);
    console.log('User email sent via Microsoft Graph API');
    
    return { success: true };
  } catch (error) {
    console.error('Error in sendEnquiryUserEmail:', error);
    throw new Error('Failed to send email');
  }
};

const sendEnquiryAdminEmail = async (data) => {
  try {
    const htmlContent = getEnquiryAdminTemplate(data);
    const adminEmail = process.env.MAIL_TO || process.env.ADMIN_EMAIL || 'admin@talentfrontier.com.au';
    const subject = `New Inbound Client Mandate: ${data.company || 'New Enquiry'}`;

    await sendEmailGraphApi(adminEmail, subject, htmlContent);
    console.log('Admin email sent via Microsoft Graph API');
    
    return { success: true };
  } catch (error) {
    console.error('Error in sendEnquiryAdminEmail:', error);
    throw new Error('Failed to send admin email');
  }
};

module.exports = {
  sendEnquiryUserEmail,
  sendEnquiryAdminEmail
};
