const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getForgotPasswordTemplate } = require('../utils/template.util');
const { sendEmail } = require('../utils/email.utils');
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_please_change';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { email }
    });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      success: true,
      token,
      admin: { id: admin.id, email: admin.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMe = async (req, res) => {
  try {
    const admin = await prisma.adminUser.findUnique({
      where: { id: req.user.id },
      select: { id: true, email: true }
    });
    
    if (!admin) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.status(200).json({ success: true, admin });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { email }
    });

    if (!admin) {
      // Return 200 even if not found to prevent email enumeration
      return res.status(200).json({ success: true, message: 'If an account exists, a reset link was sent.' });
    }

    // Secret combines standard secret with user's current hashed password
    // This makes the token a one-time use token (invalidates upon password change)
    const secret = JWT_SECRET + admin.password;
    const token = jwt.sign({ id: admin.id, email: admin.email }, secret, { expiresIn: '15m' });
    
    const resetUrl = `http://localhost:3000/console/reset-password?token=${token}&id=${admin.id}`;
    
    const htmlContent = getForgotPasswordTemplate({
      email: admin.email,
      resetUrl: resetUrl
    });

    await sendEmail({
      to: admin.email,
      subject: 'Talent Frontier - Password Reset Request',
      html: htmlContent
    });

    res.status(200).json({ success: true, message: 'Password reset link sent successfully.' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { id, token, newPassword } = req.body;

    if (!id || !token || !newPassword) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { id }
    });

    if (!admin) {
      return res.status(400).json({ error: 'Invalid reset link or user not found' });
    }

    const secret = JWT_SECRET + admin.password;
    
    try {
      // Verify token
      jwt.verify(token, secret);
    } catch (err) {
      return res.status(400).json({ error: 'Reset link is invalid or has expired' });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update in database
    await prisma.adminUser.update({
      where: { id },
      data: { password: hashedPassword }
    });

    res.status(200).json({ success: true, message: 'Password has been reset successfully.' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  login,
  getMe,
  forgotPassword,
  resetPassword
};
