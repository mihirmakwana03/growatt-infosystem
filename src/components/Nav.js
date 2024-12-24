import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <header>
        <div className="px-3 py-2 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <Link
                to="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                Growatt Infosystem
              </Link>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0">
                <li>
                  <Link to="/" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="nav-link text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="nav-link text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="nav-link text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="nav-link text-white">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
