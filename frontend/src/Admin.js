import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AdCareer from "./components/Admin/adcareer";
import Portfolio from "./components/Admin/adportfolio";
import Service from "./components/Admin/adservice";
import Dashboard from "./components/Admin/addashboard";
import Application from "./components/Admin/Applications";
import AdInquiry from "./components/Admin/adinquiry";
import CustomerForm from "./components/Admin/CustomerForm";
import AddTestimonial from "./components/Admin/AddTestimonial";

const Admin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Service />} />
        <Route path="career" element={<AdCareer />} />
        <Route path="inquiry" element={<AdInquiry />} />
        <Route path="application" element={<Application />} />
        <Route path="customerform" element={<CustomerForm />} />
        <Route path="testimonials" element={<AddTestimonial />} />
      </Routes>
    </MainLayout>
  );
};

export default Admin;
