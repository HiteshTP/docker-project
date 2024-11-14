const mongoose = require('mongoose');

// Account Schema
const accountSchema = new mongoose.Schema({
  accountHolder: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
