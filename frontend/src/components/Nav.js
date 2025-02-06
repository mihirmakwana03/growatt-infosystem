import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            Growatt InfoSystem
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#" className="dropdown-item">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Python Development
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
