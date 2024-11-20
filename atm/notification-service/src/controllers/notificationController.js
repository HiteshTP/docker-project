// Controller to handle notifications
const sendNotification = (req, res) => {
  const { recipient, message } = req.body;

  if (!recipient || !message) {
    return res.status(400).json({ error: 'Recipient and message are required' });
  }

  // Simulate sending a notification
  console.log(`Notification sent to ${recipient}: ${message}`);

  res.status(200).json({ success: true, message: 'Notification sent successfully' });
};

module.exports = { sendNotification };

