const express = require('express');
const { getLeads, createLead, updateLeadStatus, deleteLead, updateLead } = require('../controllers/lead.controller');
const { requireAuth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', requireAuth, getLeads);
router.post('/', requireAuth, createLead);
router.put('/:id', requireAuth, updateLead);
router.patch('/:id/status', requireAuth, updateLeadStatus);
router.delete('/:id', requireAuth, deleteLead);

module.exports = router;
