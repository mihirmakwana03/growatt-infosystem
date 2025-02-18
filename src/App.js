import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";

const Home = () => <h1>Home Page</h1>;
const Services = () => <h1>Services Page</h1>;
const Portfolio = () => <h1>Portfolio Page</h1>;
const AboutUs = () => <h1>About Us Page</h1>;
const Contact = () => <h1>Contact Us Page</h1>;
const Career = () => <h1>Career Page</h1>;

function App() {
  return (
    <div>
      <Router>
      <Nav />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
    </Router>
    <Footer />
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <h1>hello</h1>

    </div>
  );
}

export default App;
