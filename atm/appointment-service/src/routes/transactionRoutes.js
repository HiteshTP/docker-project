// src/routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a transaction
router.post('/transactions', authMiddleware, transactionController.createTransaction);

// Route to get transaction history by userId
router.get('/transactions/:userId', authMiddleware, transactionController.getTransactionHistory);

module.exports = router;
