import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Banking App</h1>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
