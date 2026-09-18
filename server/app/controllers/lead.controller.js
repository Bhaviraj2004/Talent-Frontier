const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getLeads = async (req, res) => {
  try {
    const leads = await prisma.chatLead.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ success: true, leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
};

const createLead = async (req, res) => {
  try {
    const { name, email, phone, contactMethod, query } = req.body;
    
    if (!name || !query) {
      return res.status(400).json({ error: 'Name and Query are required' });
    }

    const lead = await prisma.chatLead.create({
      data: {
        name,
        email: email || '',
        phone: phone || '',
        contactMethod: contactMethod || 'MANUAL',
        query,
        status: 'Client Created'
      }
    });

    res.status(201).json({ success: true, lead });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
};

const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      'Client Created',
      'Client Confirmed',
      'Onboarding Created',
      'Welcome Email',
      'NEW',
      'CONTACTED',
      'RESOLVED'
    ];

    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const lead = await prisma.chatLead.update({
      where: { id },
      data: { status }
    });

    res.status(200).json({ success: true, lead });
  } catch (error) {
    console.error('Error updating lead status:', error);
    res.status(500).json({ error: 'Failed to update lead' });
  }
};

const updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, query } = req.body;

    if (!name || !query) {
      return res.status(400).json({ error: 'Name and Query are required' });
    }

    const lead = await prisma.chatLead.update({
      where: { id },
      data: {
        name,
        email: email || '',
        phone: phone || '',
        query
      }
    });

    res.status(200).json({ success: true, lead });
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ error: 'Failed to update lead' });
  }
};

const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.chatLead.delete({
      where: { id }
    });

    res.status(200).json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ error: 'Failed to delete lead' });
  }
};

module.exports = {
  getLeads,
  createLead,
  updateLeadStatus,
  updateLead,
  deleteLead
};
