const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/notifications', notificationRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});
