const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Create a new account
router.post('/create', accountController.createAccount);

// Get account details
router.get('/:id', accountController.getAccountDetails);

// Update account balance (deposit/withdrawal)
router.put('/:id/update', accountController.updateAccountBalance);

module.exports = router;
