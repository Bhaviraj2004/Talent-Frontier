const fs = require('fs');
const path = require('path');

const getEnquiryUserTemplate = (data) => {
  const templatePath = path.join(__dirname, '..', '..', '..', 'client', 'app', 'email-template', 'enquiry-user.html');
  let htmlContent = fs.readFileSync(templatePath, 'utf-8');

  // Replace placeholders with real data
  htmlContent = htmlContent
    .replace(/{{firstName}}/g, data.firstName || '')
    .replace(/{{companyName}}/g, data.company || '')
    .replace(/{{subject}}/g, data.subject || '')
    .replace(/{{requirements}}/g, data.requirements || '')
    .replace(/{{consultationUrl}}/g, data.consultationUrl || '')
    .replace(/{{year}}/g, data.year || '')
    .replace(/{{referenceId}}/g, data.referenceId || '');

  return htmlContent;
};

const getEnquiryAdminTemplate = (data) => {
  const templatePath = path.join(__dirname, '..', '..', '..', 'client', 'app', 'email-template', 'enquiry-admin.html');
  let htmlContent = fs.readFileSync(templatePath, 'utf-8');

  // Replace placeholders with real data
  htmlContent = htmlContent
    .replace(/{{fullName}}/g, data.fullName || '')
    .replace(/{{email}}/g, data.email || '')
    .replace(/{{phone}}/g, data.phone || '')
    .replace(/{{companyName}}/g, data.company || '')
    .replace(/{{industry}}/g, data.industry || '')
    .replace(/{{jobTitle}}/g, data.jobTitle || 'N/A')
    .replace(/{{subject}}/g, data.subject || '')
    .replace(/{{requirements}}/g, data.requirements || '')
    .replace(/{{year}}/g, data.year || '')
    .replace(/{{timestamp}}/g, data.timestamp || '');

  return htmlContent;
};

module.exports = {
  getEnquiryUserTemplate,
  getEnquiryAdminTemplate
};
