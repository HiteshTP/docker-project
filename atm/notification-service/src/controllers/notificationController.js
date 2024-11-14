const sendNotification = (req, res) => {
    const { userId, message } = req.body;

    // Simulate sending a notification
    console.log(`Notification sent to user ${userId}: ${message}`);

    res.status(200).json({ success: true, message: 'Notification sent successfully' });
};

module.exports = {
    sendNotification,
};
