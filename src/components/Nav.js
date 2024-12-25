import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Include your CSS styles

function Nav() {
  useEffect(() => {
    const animateBounce = () => {
      const stop = 6; // Total number of nav items
      let i = 1;
      const interval = setInterval(() => {
        if (i > stop) {
          clearInterval(interval);
          return;
        }
        const element = document.getElementById(`len${i}`);
        if (element) {
          element.classList.toggle('bounce');
        }
        i++;
      }, 500);
    };
    animateBounce();
  }, []);

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
                  <Link id="len1" to="/" className="nav-link text-white hoverable">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    id="len2"
                    to="#"
                    className="nav-link text-white hoverable dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu bg-dark text-white">
                    <li>
                      <Link to="#" className="dropdown-item text-white hoverable">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item text-white hoverable">
                        App Development
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item text-white hoverable">
                        Python Development
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link id="len3" to="/portfolio" className="nav-link text-white hoverable">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link id="len4" to="/aboutus" className="nav-link text-white hoverable">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link id="len5" to="/contact" className="nav-link text-white hoverable">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link id="len6" to="/career" className="nav-link text-white hoverable">
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
