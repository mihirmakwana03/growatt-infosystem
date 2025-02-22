import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AdCareer from "./components/Admin/adcareer";
import Portfolio from "./components/Admin/adportfolio";
import Service from "./components/Admin/adservice";
import Dashboard from "./components/Admin/addashboard";
import SendEmail from "./components/SendEmail";

const Admin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Service />} />
        <Route path="career" element={<AdCareer />} />
        <Route path="email" element={<SendEmail />} />
      </Routes>
    </MainLayout>
  );
};

export default Admin;
