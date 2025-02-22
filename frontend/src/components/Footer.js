import React, { useState } from "react";
import "./Footer.css";
import Logo from "./img/logo.png";
import { FaMapMarkedAlt, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMailOpen } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "./Tooltip";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Thank You for Subscribing to Growatt Infosystem!",
          message: `
            <p><strong>Dear Sir/Ma'am,</strong></p>
            <p>Thank you for subscribing to Growatt Infosystem! 🎉 We're excited to have you on board. <br>Stay tuned for updates, insights, and the latest in technology.</p>
            <p>If you have any questions, feel free to reach out.</p>
            Best Regards,<br>
            Growatt Infosystem Team
          `,
        }),
      });

      const data = await response.json();
      console.log(data.success || data.error);

      setNotification("Email sent successfully!");
      setEmail(""); // Clear input after submission

      // Auto-hide notification after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">

        {/* Notification */}
        {notification && (
          <div className="alert alert-success position-fixed top-0 end-0 m-3 d-flex align-items-center">
            <FiCheckCircle className="me-2" />
            <span>{notification}</span>
          </div>
        )}

        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta text-center">
                <div className="cta-text">
                  <FaMapMarkedAlt size={30} color="#ff5e14" />
                  <h4>Find us</h4>
                  <span>150 Feet Ring Road, <br /> Nr. Mavdi Circle, Rajkot, Gujarat - 831150</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta text-center">
                <div className="cta-text">
                  <LuPhoneCall size={30} color="#ff5e14" />
                  <h4>Call us</h4>
                  <span>+91 81558 08720</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta text-center">
                <div className="cta-text">
                  <IoMdMailOpen size={30} color="#ff5e14" />
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
                  <a href="/">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>Logo Design | Brand Identity Design | Packaging Design | Business Card Design | Letterheads | Label design | Flex design | Catalog design | Brochure design | Banner design</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget text-center">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="aboutus">About us</a></li>
                  <li><a href="services">Services</a></li>
                  <li><a href="portfolio">Portfolio</a></li>
                  <li><a href="contact">Contact</a></li>
                  <li><a href="career">Career</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget text-center">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
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
                  {/* <Tooltip /> */}
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
                <p>Copyright &copy; 2018, All Right Reserved <a href="#">Growatt InfoSystem</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
