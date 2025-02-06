import React, { useState } from "react";
import "./Footer.css";
import Logo from "./img/logo.png";
import { FaMapMarkedAlt } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMailOpen } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Demo Email",
          message: "Test Email", //We can write any message here with subject
        }),
      });

      const data = await response.json();
      console.log(data.success || data.error);
      setEmail(""); // Clear input after submission
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta text-center">
                <div className="cta-text">
                  <FaMapMarkedAlt />
                  <h4>Find us</h4>
                  <span>
                    150 Feet Ring Road, <br />
                    Nr. Mavdi Circle, Rajkot, Gujarat - 831150{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta text-center">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <LuPhoneCall />
                  <h4>Call us</h4>
                  <span>+91 81558 08720</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta text-center">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <IoMdMailOpen />
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget text-center">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Logo Design | Graphic Design | Brand Identity Corporate
                    Branding |Brochure Design | Label Design Premium Quality &
                    Exceptional Support
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget text-center">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="aboutus">About us</a>
                  </li>
                  <li>
                    <a href="services">Services</a>
                  </li>
                  <li>
                    <a href="portfolio">portfolio</a>
                  </li>
                  <li>
                    <a href="contact">Contact</a>
                  </li>
                  <li>
                    <a href="career">Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget text-center">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">
                      <MdOutlineAlternateEmail />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="footer-widget text-center">
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                  <a href="#">
                    <BsInstagram />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2018, All Right Reserved{" "}
                  <a href="#">Growatt InfoSystem</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
