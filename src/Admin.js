import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';

const Home = () => <h1>Admin Home Page</h1>;
const Portfolio = () => <h1>Admin Portfolio Page</h1>;
const Service = () => <h1>Admin Service Page</h1>;
const Career = () => <h1>Admin Career Page</h1>;

const Admin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Service />} />
        <Route path="career" element={<Career />} />
      </Routes>
    </MainLayout>
  );
};

export default Admin;
