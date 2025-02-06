import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./img/logo.png";
import "./sidebar.css";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GiAstronautHelmet } from "react-icons/gi";
import { TfiBriefcase } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "250px", height: "100vh" }}
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
          <NavLink
            to="/admin/dashboard"
            className="nav-link link-white"
            activeClassName="active"
            exact
          >
            <RiDashboardHorizontalFill /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/portfolio"
            className="nav-link link-white"
            activeClassName="active"
          >
            <TfiBriefcase /> Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/services"
            className="nav-link link-white"
            activeClassName="active"
          >
            <MdOutlineMiscellaneousServices /> Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/career"
            className="nav-link link-white"
            activeClassName="active"
          >
            <GiAstronautHelmet /> Career
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
