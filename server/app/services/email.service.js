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

const sendEmailGraphApi = async (toEmail, subject, htmlContent, ccRecipients = [], replyTo = null) => {
    const accessToken = await getAccessToken();
    const fromEmail = process.env.MAIL_FROM || 'admin@talentfrontier.com.au';
    
    // Support single email or array of emails
    const toList = Array.isArray(toEmail) ? toEmail : [toEmail];
    const toRecipientsArray = toList.filter(Boolean).map(email => ({
        emailAddress: {
            address: email.trim()
        }
    }));

    // Format CC recipients
    const ccList = Array.isArray(ccRecipients) ? ccRecipients : (ccRecipients ? [ccRecipients] : []);
    const ccRecipientsArray = ccList.filter(Boolean).map(email => ({
        emailAddress: {
            address: email.trim()
        }
    }));

    // Format Reply-To
    const replyToList = replyTo 
        ? (Array.isArray(replyTo) ? replyTo : [replyTo]) 
        : [{ address: fromEmail, name: "Talent Frontier" }];
    const replyToArray = replyToList.filter(Boolean).map(item => {
        if (typeof item === 'string') {
            return { emailAddress: { address: item.trim(), name: item.trim() } };
        }
        return {
            emailAddress: {
                address: (item.address || item.email || fromEmail).trim(),
                name: (item.name || item.address || "Talent Frontier").trim()
            }
        };
    });

    const message = {
        subject: subject,
        body: {
            contentType: "HTML",
            content: htmlContent
        },
        from: {
            emailAddress: {
                name: "Talent Frontier",
                address: fromEmail
            }
        },
        toRecipients: toRecipientsArray,
        replyTo: replyToArray,
        importance: "Normal",
        internetMessageHeaders: [
            {
                name: "Auto-Submitted",
                value: "auto-generated"
            },
            {
                name: "X-Auto-Response-Suppress",
                value: "All"
            }
        ]
    };

    if (ccRecipientsArray.length > 0) {
        message.ccRecipients = ccRecipientsArray;
    }

    const mailData = {
        message,
        saveToSentItems: true
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
    const subject = `Thank you for your enquiry - Talent Frontier [Ref: TF-${data.referenceId}]`;
    
    await sendEmailGraphApi(
      data.email, 
      subject, 
      htmlContent, 
      [], 
      { name: "Talent Frontier", address: process.env.MAIL_FROM || 'admin@talentfrontier.com.au' }
    );
    console.log('User confirmation email sent via Microsoft Graph API');
    
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
    const ccEmailConfig = process.env.ADMIN_CC_EMAIL || 'vivek@moranaccountants.com.au';
    const clientName = data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'New Prospect';
    const clientCompany = data.company ? ` (${data.company})` : '';
    const subject = `New Website Enquiry: ${clientName}${clientCompany} [Ref: TF-${data.referenceId || 'WEB'}]`;

    const ccRecipients = ccEmailConfig
      ? ccEmailConfig.split(',').map(e => e.trim()).filter(Boolean)
      : ['vivek@moranaccountants.com.au'];

    await sendEmailGraphApi(
      adminEmail, 
      subject, 
      htmlContent, 
      ccRecipients,
      { name: clientName, address: data.email }
    );
    console.log(`Admin email sent via Microsoft Graph API to ${adminEmail} (CC: ${ccRecipients.join(', ')})`);
    
    return { success: true };
  } catch (error) {
    console.error('Error in sendEnquiryAdminEmail:', error);
    throw new Error('Failed to send admin email');
  }
};

const sendChatbotAdminEmail = async (data) => {
  try {
    const adminEmail = process.env.MAIL_TO || process.env.ADMIN_EMAIL || 'admin@talentfrontier.com.au';
    const ccEmailConfig = process.env.ADMIN_CC_EMAIL || 'vivek@moranaccountants.com.au';
    const leadName = (data.name || 'Website Visitor').trim();
    const subject = `New Chatbot Lead: ${leadName} - Talent Frontier`;

    const formattedQuery = data.query 
      ? data.query.split(' -> ').map(item => `<li style="margin-bottom: 6px;">${item.trim()}</li>`).join('') 
      : '<li>General Inquiry</li>';

    const notesHtml = data.notes && data.notes.trim()
      ? `<div style="margin-top: 16px; padding: 14px 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #0284c7; border-radius: 4px;">
           <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Client Message / Specific Requirements</div>
           <p style="font-size: 14px; color: #1e293b; margin: 0; white-space: pre-line;">${data.notes.trim()}</p>
         </div>`
      : '';

    const timestamp = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>New Chatbot Lead</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color: #0f172a;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);">
    <div style="background-color: #0a2540; padding: 12px 24px; color: #94a3b8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
      Talent Frontier | Chatbot Lead Notification
    </div>
    <div style="padding: 24px 28px; border-bottom: 1px solid #f1f5f9;">
      <img src="https://www.talentfrontier.com.au/logo.png" alt="Talent Frontier" style="max-width: 180px; height: auto;" />
    </div>
    <div style="padding: 28px;">
      <div style="display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px;">
        New Chatbot Inquiry
      </div>
      <h2 style="font-size: 22px; color: #0a2540; margin: 0 0 8px 0; font-weight: 700;">
        Inquiry from ${leadName}
      </h2>
      <p style="font-size: 14px; color: #475569; margin: 0 0 20px 0;">
        Received on ${timestamp} (AEST).
      </p>

      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px 20px; margin-bottom: 20px;">
        <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 10px;">Contact Information</div>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #64748b; width: 120px;"><strong>Name:</strong></td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${leadName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td>
            <td style="padding: 6px 0;"><a href="mailto:${data.email || ''}" style="color: #0284c7; text-decoration: none;">${data.email || 'Not provided'}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td>
            <td style="padding: 6px 0;"><a href="tel:${data.phone || ''}" style="color: #0284c7; text-decoration: none;">${data.phone || 'Not provided'}</a></td>
          </tr>
        </table>
      </div>

      <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px 20px; margin-bottom: 20px;">
        <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 10px;">Hiring / Service Selections</div>
        <ul style="margin: 0; padding-left: 20px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          ${formattedQuery}
        </ul>
        ${notesHtml}
      </div>

      <p style="font-size: 12px; color: #94a3b8; margin: 24px 0 0 0; text-align: center;">
        This notification was automatically sent by Talent Frontier Website Assistant.
      </p>
    </div>
  </div>
</body>
</html>`;

    const ccRecipients = ccEmailConfig
      ? ccEmailConfig.split(',').map(e => e.trim()).filter(Boolean)
      : ['vivek@moranaccountants.com.au'];

    await sendEmailGraphApi(
      adminEmail,
      subject,
      htmlContent,
      ccRecipients,
      data.email ? { name: leadName, address: data.email } : null
    );
    console.log(`Chatbot lead email sent via Microsoft Graph API to ${adminEmail} (CC: ${ccRecipients.join(', ')})`);

    return { success: true };
  } catch (error) {
    console.error('Error in sendChatbotAdminEmail:', error);
    throw error;
  }
};

module.exports = {
  sendEnquiryUserEmail,
  sendEnquiryAdminEmail,
  sendChatbotAdminEmail
};
