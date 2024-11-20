// src/models/transactionModel.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    type: { type: String, enum: ['deposit', 'withdrawal', 'transfer'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
});

module.exports = mongoose.model('Transaction', transactionSchema);