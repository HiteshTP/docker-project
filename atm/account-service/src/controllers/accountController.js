const Account = require('../models/accountModel');

// Create a new account
exports.createAccount = async (req, res) => {
  try {
    const { accountHolder, initialBalance } = req.body;
    const newAccount = new Account({
      accountHolder,
      balance: initialBalance,
    });
    await newAccount.save();
    res.status(201).json({ message: 'Account created successfully', account: newAccount });
  } catch (error) {
    res.status(500).json({ message: 'Error creating account', error });
  }
};

// Get account details by account ID
exports.getAccountDetails = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json({ account });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account details', error });
  }
};

// Update account balance (deposit or withdrawal)
exports.updateAccountBalance = async (req, res) => {
  try {
    const { amount } = req.body;
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    account.balance += amount;
    await account.save();
    res.status(200).json({ message: 'Account balance updated', account });
  } catch (error) {
    res.status(500).json({ message: 'Error updating account balance', error });
  }
};
