import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Login from './components/Admin/login';
import App from './Home';
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
import Home from './Home';
import TermsAndConditions from './components/TermsConditions';
import Portfolio from './components/pages/Portfolio';
import Career from './components/pages/career';
import Services from './components/pages/services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import AdminCarrer from '../src/components/Admin/adcareer';
import PricingComponent from './components/pages/pricing';

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
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/admin/carrer" element={<AdminCarrer />} />
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
          <Route path="/termsconditions" element={<TermsAndConditions />} />
          <Route path="/pricingcomponent" element={<PricingComponent />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
