import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StyleWrapper from "./StyledWrapper";
import ReCAPTCHA from "react-google-recaptcha"; // 🔹 Import ReCAPTCHA
import whatsapp from "../img/whatsapp.png";
import { GrFormNext } from "react-icons/gr";

const SITE_KEY = "6LdtrvgqAAAAABmj3YRQhv7d-YzEOjkts7TyH9gR"; // 🔹 Replace with your actual site key

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null); // 🔹 Store reCAPTCHA token
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Full name must contain only letters and spaces.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    if (!captchaToken) {
      newErrors.captcha = "Please complete the reCAPTCHA.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact/submitcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,   // ✅ Include form data
          captcha: captchaToken,  // ✅ Include reCAPTCHA token
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("✅ Form submitted successfully!");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      setResponseMessage("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid text-black p-4">
      <h1 className="text-center fw-bold text-warning">
        <a href="/contact" className="text-warning">Contact Us</a>
      </h1>
      <hr />

      <div className="row g-4">
        {/* Left Section - Contact Info */}
        <div className="col-lg-6 col-12 text-center text-lg-start">
          <h2>Get In Touch</h2>
          <p>Have any questions? <strong>Feel free</strong> to get in <strong>touch with us</strong>. We are here to assist you.</p>

          <h4>Head Office</h4>
          <ul className="list-unstyled">
            <li><i className="fas fa-map-marker-alt text-primary"></i> 831, 150ft Ring Road, Rajkot, India</li>
            <li>
              <i className="fas fa-envelope text-primary"></i>
              <a href="mailto:work@hexonbranding.com" className="text-black text-decoration-none">
                work@hexonbranding.com
              </a>
            </li>
            <li><i className="fas fa-phone text-primary"></i> +91 9510806265</li>
          </ul>
          <h4 className="mt-4 text-black d-flex justify-content-center">Follow Us</h4>
          <div className="d-flex justify-content-center"><StyleWrapper /></div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-lg-6 col-12 bg-light p-4 rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name *</label>
              <input type="text" id="fullName" className={`form-control ${errors.fullName ? "is-invalid" : ""}`} value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email *</label>
              <input type="email" id="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} value={formData.email} onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input type="text" id="phone" className={`form-control ${errors.phone ? "is-invalid" : ""}`} value={formData.phone} onChange={handleChange} />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea id="message" rows="4" className={`form-control ${errors.message ? "is-invalid" : ""}`} value={formData.message} onChange={handleChange} />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            {/* 🔹 Google reCAPTCHA */}
            <div className="mb-3">
              <ReCAPTCHA
                sitekey={SITE_KEY}
                onChange={(token) => {
                  console.log("reCAPTCHA token:", token); // Debugging
                  setCaptchaToken(token);
                }}
              />
              {errors.captcha && <div className="text-danger">{errors.captcha}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>

          {responseMessage && <p className="mt-3 text-center">{responseMessage}</p>}
        </div>
      </div>
      <div className="mt-4">
        <iframe
          className="w-100"
          height="300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.7750430458216!2d70.78665602476792!3d22.262806667271903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca5dbe7afda3%3A0x6d8e1af5be0f4126!2sRK%20Empire!5e0!3m2!1sen!2sin&z=12"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
