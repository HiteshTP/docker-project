const express = require('express');
const mongoose = require('mongoose');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
const PORT = 4001;

// Middleware
app.use(express.json());

// Database connection
mongoose
  .connect('mongodb://mongodb:27017/hospital', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/appointments', appointmentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Appointment Service running on port ${PORT}`);
});

