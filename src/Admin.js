import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';

const Home = () => <h1>Admin Home Page</h1>;
const Portfolio = () => <h1> Admin Portfolio Page</h1>;
const Service = () => <h1>Admin Service Page</h1>;
const Career = () => <h1>Admin Career Page</h1>;

const Admin = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/adminhome" element={<Home />} />
          <Route path="/adminportfolio" element={<Portfolio />} />
          <Route path="/adminservices" element={<Service />} />
          <Route path="/admincareer" element={<Career />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default Admin;