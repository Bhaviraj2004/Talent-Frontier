const express = require('express');
const router = express.Router();
const { submitEnquiry } = require('../controllers/enquiry.controller');
const { validateEnquiry } = require('../middlewares/validate.middleware');

router.post('/enquiry', validateEnquiry, submitEnquiry);

module.exports = router;
