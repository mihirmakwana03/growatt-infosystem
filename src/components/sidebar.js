import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/logo.png';
import './sidebar.css';

const navItems = [
  { path: '/admin/home', label: 'Home' },
  { path: '/admin/portfolio', label: 'Portfolio' },
  { path: '/admin/services', label: 'Services' },
  { path: '/admin/career', label: 'Career' },
];

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: '250px', height: '100vh' }}
    >
      <NavLink
        to="/admin/home"
        className={({ isActive }) =>
          `d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none ${
            isActive ? 'active' : ''
          }`
        }
      >
        <span>
          <img src={Logo} className="img-fluid" alt="logo" />
        </span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link link-dark ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
