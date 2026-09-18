require('dotenv').config();
const express = require('express');
const cors = require('cors');

const enquiryRoutes = require('./app/routes/enquiry.routes');
const authRoutes = require('./app/routes/auth.routes');
const insightRoutes = require('./app/routes/insight.routes');
const categoryRoutes = require('./app/routes/category.routes');
const chatbotRoutes = require('./app/chatbot/chatbot.routes');
const leadRoutes = require('./app/routes/lead.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://www.talentfrontier.com.au',
    'https://talentfrontier.com.au'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Talent Frontier API is running...');
});
app.use('/api', enquiryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/insights', insightRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/leads', leadRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
