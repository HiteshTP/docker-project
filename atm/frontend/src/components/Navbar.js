import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/transactions">Transactions</Link>
    </nav>
  );
};

export default Navbar;
