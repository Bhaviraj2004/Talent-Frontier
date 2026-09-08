require('dotenv').config();
const express = require('express');
const cors = require('cors');

const enquiryRoutes = require('./app/routes/enquiry.routes');
const authRoutes = require('./app/routes/auth.routes');
const insightRoutes = require('./app/routes/insight.routes');
const categoryRoutes = require('./app/routes/category.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', enquiryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/insights', insightRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
