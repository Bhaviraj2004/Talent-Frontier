const validateEnquiry = (req, res, next) => {
  const { firstName, lastName, email, company, subject, requirements } = req.body;

  if (!firstName || !lastName || !email || !company || !subject || !requirements) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};

module.exports = {
  validateEnquiry
};
