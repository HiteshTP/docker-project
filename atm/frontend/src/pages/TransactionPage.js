import React, { useState, useEffect } from "react";
import TransactionHistory from "../components/TransactionHistory";

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transaction data from an API (Mock data here)
    setTransactions([
      { date: "2024-11-01", amount: 100, type: "Deposit" },
      { date: "2024-11-05", amount: 50, type: "Withdrawal" },
    ]);
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default TransactionPage;
