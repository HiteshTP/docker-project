const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notificationRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/notifications', notificationRoutes);

// Server setup
const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});

