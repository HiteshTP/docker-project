const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection (using a hardcoded URI)
mongoose.connect('mongodb://mongodb:27017/hospital-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', patientRoutes);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Patient service running on port ${port}`);
});

