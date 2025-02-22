import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush, FaIdBadge, FaBoxOpen, FaBusinessTime, FaFileSignature, FaTags, FaExpandArrowsAlt, FaBookOpen, FaNewspaper, FaRegImages } from "react-icons/fa";
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
                    <Link to="/logodesign" className="dropdown-item">
                      <FaPaintBrush /> Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/brandidentitydesign" className="dropdown-item">
                      <FaIdBadge /> Brand Identity Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/packagingdesign" className="dropdown-item">
                      <FaBoxOpen /> Packaging Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/businesscarddesign" className="dropdown-item">
                      <FaBusinessTime /> Business Card Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/letterheaddesign" className="dropdown-item">
                      <FaFileSignature /> Letterheads
                    </Link>
                  </li>
                  <li>
                    <Link to="/labeldesign" className="dropdown-item">
                      <FaTags /> Label Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/flexdesign" className="dropdown-item">
                      <FaExpandArrowsAlt /> Flex Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogdesign" className="dropdown-item">
                      <FaBookOpen /> Catalog Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/brochuredesign" className="dropdown-item">
                      <FaNewspaper /> Brochure Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/bannerdesign" className="dropdown-item">
                      <FaRegImages /> Banner Design
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
