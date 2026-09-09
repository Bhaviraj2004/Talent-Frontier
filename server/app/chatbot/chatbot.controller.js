const chatbotService = require('./chatbot.service');

const ask = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }
    
    // Call the service to get the AI response
    const answer = await chatbotService.askQuestion(query);
    res.status(200).json({ success: true, answer });
  } catch (error) {
    console.error("Chatbot Ask Error:", error);
    res.status(500).json({ error: "Failed to process query" });
  }
};

const addChunk = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
    
    // In a real app, protect this route with Admin Middleware
    const result = await chatbotService.addServiceChunk(content);
    res.status(201).json(result);
  } catch (error) {
    console.error("Chatbot Add Chunk Error:", error);
    res.status(500).json({ error: "Failed to add chunk" });
  }
};

const captureLead = async (req, res) => {
  try {
    const { name, email, phone, query } = req.body;
    if (!name || !query) {
      return res.status(400).json({ error: "Name and query are required" });
    }
    
    const lead = await chatbotService.saveLead(name, email, phone, query);
    
    // TODO: Trigger email to admin here
    
    res.status(201).json({ success: true, message: "Lead captured successfully", lead });
  } catch (error) {
    console.error("Chatbot Lead Error:", error);
    res.status(500).json({ error: "Failed to capture lead" });
  }
};

module.exports = {
  ask,
  addChunk,
  captureLead
};
