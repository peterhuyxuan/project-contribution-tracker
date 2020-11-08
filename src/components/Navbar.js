import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Project Contribution Tracker
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Project Contributions
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add Project Contribution
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
