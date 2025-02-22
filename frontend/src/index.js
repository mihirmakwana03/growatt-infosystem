import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Login from './components/Admin/login';
import App from './App';
import Admin from './Admin';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LogoDesign from './Services/LogoDesign';
import BrandIdentityDesign from './Services/BrandIdentityDesign';
import PackagingDesign from './Services/PackagingDesign';
import BusinessCardDesign from './Services/BusinessCardDesign';
import LetterheadDesign from './Services/LetterheadDesign';
import LabelDesign from './Services/LabelDesign';
import FlexDesign from './Services/FlexDesign';
import CatalogDesign from './Services/CatalogDesign';
import BrochureDesign from './Services/BrochureDesign';
import BannerDesign from './Services/BannerDesign';

const Home = () => <h1>Home Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Portfolio = () => <h1>Portfolio Page</h1>;
const AboutUs = () => <h1>About Us Page</h1>;
const Contact = () => <h1>Contact Us Page</h1>;
const Career = () => <h1>Career Page</h1>;

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavFooterRoutes = ['/login', '/admin'];

  const shouldShowNavFooter = !noNavFooterRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {shouldShowNavFooter && <Nav />}
      <main className="container mt-4">
        {children}
      </main>
      {shouldShowNavFooter && <Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/logodesign" element={<LogoDesign />} />
          <Route path="/brandidentitydesign" element={<BrandIdentityDesign />} />
          <Route path="/packagingdesign" element={<PackagingDesign />} />
          <Route path="/businessCarddesign" element={<BusinessCardDesign />} />
          <Route path="/letterheaddesign" element={<LetterheadDesign />} />
          <Route path="/labeldesign" element={<LabelDesign />} />
          <Route path="/flexdesign" element={<FlexDesign />} />
          <Route path="/catalogdesign" element={<CatalogDesign />} />
          <Route path="/brochuredesign" element={<BrochureDesign />} />
          <Route path="/bannerdesign" element={<BannerDesign />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
