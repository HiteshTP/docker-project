import React from 'react';
import TransactionHistory from '../components/TransactionHistory';

const transactions = [
  { date: '2024-11-01', amount: '$500', type: 'Deposit' },
  { date: '2024-11-02', amount: '$200', type: 'Withdrawal' },
];

const TransactionPage = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default TransactionPage;
