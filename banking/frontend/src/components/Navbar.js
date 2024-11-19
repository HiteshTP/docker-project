import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/account">Account</Link>
      <Link className="nav-link" to="/transactions">Transactions</Link>
      <Link className="nav-link" to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
