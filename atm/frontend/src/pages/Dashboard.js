import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to your Dashboard</h2>
      <p>View your account details and transaction history.</p>
      <Link to="/transactions">View Transactions</Link>
    </div>
  );
};

export default Dashboard;
