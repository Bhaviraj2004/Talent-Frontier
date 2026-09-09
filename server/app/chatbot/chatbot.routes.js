const express = require('express');
const router = express.Router();
const chatbotController = require('./chatbot.controller');

// Chat endpoints
router.post('/ask', chatbotController.ask);

// Knowledge base endpoints
router.post('/chunks', chatbotController.addChunk);

// Lead endpoints
router.post('/lead', chatbotController.captureLead);

module.exports = router;
