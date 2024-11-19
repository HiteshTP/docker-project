import React from "react";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const features = [
    { id: 1, title: "Account Details", description: "View your account balance and details.", link: "/account" },
    { id: 2, title: "Transaction History", description: "View your recent transactions.", link: "/transactions" },
    { id: 3, title: "Admin Panel", description: "Manage users and accounts (Admin only).", link: "/admin" },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {features.map((feature) => (
          <DashboardCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            link={feature.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
