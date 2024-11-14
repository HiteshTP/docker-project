const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRouters');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the User Service API');  // Root route message
});
// Middleware to parse JSON requests
app.use(express.json());

// Routes for the user service
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
