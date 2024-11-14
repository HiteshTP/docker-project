const express = require('express');
const router = express.Router();
const { sendNotification } = require('../controllers/notificationController');

// Route for sending notifications
router.post('/send', sendNotification);

module.exports = router;
