import React, { useState } from "react";
import { motion } from "framer-motion";
import whatsapp from "../images/whatsapp.png";
import "../index.css";
import StyleWrapper from "./StyledWrapper";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const nameRegex = /^[a-zA-Z\s]+$/; // Only allows alphabets and spaces

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Full name must contain only letters and spaces.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      // Clear the form
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="bg-gray-900 text-white font-roboto">
      <div className="container mx-auto py-5">
        <div className="bg-gray-800 p-5 rounded-lg">
          {/* Page Header */}
          <div className="text-center mb-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.1 }}>
              <h1
                className="text-4xl font-bold"
                style={{ fontFamily: "Cambria" }}
              >
                Contact Us
              </h1>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Information Section */}
            <div className="mb-4"> 
              <h2 className="text-lg mb-3">Get In Touch</h2>
              <h3 className="text-2xl mb-4">
                Let's Talk For your{" "}
                <span className="text-color">Next Projects</span>
              </h3>
              <p>
                If you have any questions or inquiries, please{" "}
                <span className="font-bold">feel free</span> to get in{" "}
                <span className="font-bold">touch with us.</span> We are here to{" "}
                <span className="font-bold">assist</span> you and provide any
                information you may need.
              </p>
              <div className="text-color-addr">
                <h4 className="text-lg mt-4   ">Head Office</h4>
                <ul className="list-none">
                  <li className="mb-2">
                    <i className="fas fa-map-marker-alt text-blue-500"></i> 610,
                    Alpha One, Opp. Tapovan School, Ambedkar Chowk, 150ft Ring
                    Road, Rajkot 360004
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-envelope text-blue-500"></i>{" "}
                    <a
                      href="mailto:work@hexonbranding.com"
                      className="hover:underline hover:text-blue-500"
                    >
                      work@hexonbranding.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-phone text-blue-500"></i> +91
                    9558198701
                  </li>
                </ul>
              </div>

              <h4 className="text-lg mt-4 ml-[70px]">Follow Us</h4>

              <div className="flex space-x-3">
                <StyleWrapper />
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="p-4">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    className={`mt-1 block w-full bg-gray-700 text-white border ${
                      errors.fullName ? "border-red-500" : "border-gray-600"
                    } rounded-md p-1.5`}
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className={`mt-1 block w-full bg-gray-700 text-white border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } rounded-md p-1.5`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    className={`mt-1 block w-full bg-gray-700 text-white border ${
                      errors.phone ? "border-red-500" : "border-gray-600"
                    } rounded-md p-1.5`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    rows="4"
                    className={`mt-1 block w-full bg-gray-700 text-white border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } rounded-md p-1.5`}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2 text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4  rounded-full p-2.5 hover:bg-blue-600"
                  >
                    Send Us Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.7750430458216!2d70.78665602476792!3d22.262806667271903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca5dbe7afda3%3A0x6d8e1af5be0f4126!2sRK%20Empire!5e0!3m2!1sen!2sin!4v1735227505832!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="fixed bottom-0 right-0 p-3" style={{ zIndex: "6" }}>
          <a
            href="https://wa.me/9023608908?text=Hello how can i help you?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              width={"40"}
              alt="whatsapp"
              // className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
