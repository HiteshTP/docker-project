import React from "react";
import { Link } from "react-router-dom";

function DashboardCard({ title, description, link }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} style={{ color: "#007bff", textDecoration: "none" }}>
        Go
      </Link>
    </div>
  );
}

export default DashboardCard;
