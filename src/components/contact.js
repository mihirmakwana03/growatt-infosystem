
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-dark text-white font-roboto">
      <div className="container py-5">
    <div className="container text-white bg-dark p-5">
      {/* Page Header */}
      


      <div className="text-center mb-4">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.1}}>
      <h1 className="display-4 font" style={{ fontFamily: 'Cambria' }}>Contact Us</h1>
      </motion.div>
     
     
      </div>
      
      

      <div className="row">
        {/* Contact Information Section */}
        <div className="col-md-6 mb-4">
          <h2 className="h5 mb-3">Get In Touch</h2>
          <h3 className="h3 mb-4">
            Let's Talk For your <span className="text-primary">Next Projects</span>
          </h3>
          <p style={{ fontFamily: '  ' }}>
            If you have any questions or inquiries, please{" "}
            <span className="fw-bold">feel free</span> to get in{" "}
            <span className="fw-bold">touch with us.</span> We are here to{" "}
            <span className="fw-bold">assist</span> you and provide any
            information you may need.
          </p>
          <h4 className="h6 mt-4">Head Office</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="fas fa-map-marker-alt text-primary"></i> 610, Alpha
              One, Opp. Tapovan School, Ambedkar Chowk, 150ft Ring Road, Rajkot
              360004
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope text-primary"></i>{" "}
              work@hexonbranding.com
            </li>
            <li className="mb-2">
              <i className="fas fa-phone text-primary"></i> +91 9558198701
            </li>
          </ul>
          
          <h4 className="h6 mt-4">Follow Us</h4>
          
          <div>
            <a href="#" className="text-primary me-3">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-primary me-3">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-primary">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="form-control bg-secondary text-white border-0"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control bg-secondary text-white border-0"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="form-control bg-secondary text-white border-0"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City / State <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="city"
                placeholder="City / State"
                className="form-control bg-secondary text-white border-0"
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="4"
                className="form-control bg-secondary text-white border-0"
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                Send Us Message
              </button>
            </div>
            
          </form>
        </div>
        
       
        </div>
        <div className="container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.7750430458216!2d70.78665602476792!3d22.262806667271903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca5dbe7afda3%3A0x6d8e1af5be0f4126!2sRK%20Empire!5e0!3m2!1sen!2sin!4v1735227505832!5m2!1sen!2sin" 
      width="50%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    
    </div>
    
    </div>
    
  );
};

export default Contact;
