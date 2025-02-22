// Admin Page Layout
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/logo.png';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: '250px', height: '100vh' }}
    >
      <NavLink
        to="/adminhome"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <a href="index.html">
          <img src={Logo} className="img-fluid" alt="logo" />
        </a>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/adminhome" className="nav-link link-dark" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminportfolio" className="nav-link link-dark" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminservices" className="nav-link link-dark" activeClassName="active">
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/admincareer" className="nav-link link-dark" activeClassName="active">
            Career
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
