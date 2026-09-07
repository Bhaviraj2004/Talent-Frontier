const express = require('express');
const { getInsights, getInsightById, createInsight, updateInsight, deleteInsight, toggleInsightFlag } = require('../controllers/insight.controller');
const { requireAuth } = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');

const router = express.Router();

router.get('/', getInsights);
router.get('/:id', getInsightById);

router.post('/', requireAuth, createInsight);
router.put('/:id', requireAuth, updateInsight);
router.patch('/:id/toggle', requireAuth, toggleInsightFlag);
router.delete('/:id', requireAuth, deleteInsight);

module.exports = router;
