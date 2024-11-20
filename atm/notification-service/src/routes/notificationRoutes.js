const express = require('express');
const router = express.Router();
const { sendNotification } = require('../controllers/notificationController');

// Define route for sending notifications
router.post('/send', sendNotification);

module.exports = router;

