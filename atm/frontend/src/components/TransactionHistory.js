import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((txn, index) => (
          <li key={index}>
            {txn.date}: {txn.amount} ({txn.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
