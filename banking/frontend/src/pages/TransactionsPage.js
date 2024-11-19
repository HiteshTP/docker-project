import React from "react";

function TransactionsPage() {
  const transactions = [
    { id: 1, date: "2024-11-01", amount: 100, type: "Credit" },
    { id: 2, date: "2024-11-02", amount: 50, type: "Debit" },
  ];

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id}>
            {txn.date}: {txn.type} of ${txn.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionsPage;
