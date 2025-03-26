import React from "react";
import { GrFormNext } from "react-icons/gr";
import whatsapp from "../img/whatsapp.png";
import { motion } from "framer-motion";

function About() {
    return (
        <div className="container mt-5">
            <h1 className="text-center fw-bold" style={{ color: "#f2912a" }}>
                <a href="/aboutus" style={{ color: "#f2912a" }}>
                    About US
                </a>
            </h1>
            <hr />
            {/* Header Section */}
            <motion.header
                className="text-center mb-5"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className="display-5 fw-bold">
                    Meet Our <span className="text-primary">Team</span>
                </h1>
                <p className="lead">
                    We are proud to <strong>introduce</strong> our{" "}
                    <strong>talented team</strong>. Each member brings a{" "}
                    <strong>unique set of skills</strong> to our{" "}
                    <strong>collective success</strong>.
                </p>
            </motion.header>

            {/* Team Members */}
            <div className="row g-4 justify-content-center">
                {/* Team Member 1 */}
                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <motion.div
                        className="bg-transparent text-black text-center p-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <i className="fas fa-quote-left text-primary fs-2"></i>
                        <div className="d-flex justify-content-center">
                            <img
                                src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg"
                                alt="Vishal Ponkiya"
                                className="rounded-circle my-3 img-fluid"
                                style={{
                                    width: "250px",
                                    height: "250px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <h5 className="fw-bold text-dark">Vishal Ponkiya</h5>
                        <p className="text-primary">CEO & Founder</p>
                    </motion.div>
                </div>

                {/* Team Member 2 */}
                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <motion.div
                        className="bg-transparent text-black text-center p-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <i className="fas fa-quote-left text-primary fs-2"></i>
                        <div className="d-flex justify-content-center">
                            <img
                                src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg"
                                alt="Meet Ponkiya"
                                className="rounded-circle my-3 img-fluid"
                                style={{
                                    width: "250px",
                                    height: "250px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <h5 className="fw-bold text-dark">Meet Ponkiya</h5>
                        <p className="text-primary">CFO & Co-Founder</p>
                    </motion.div>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white text-black py-5">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-12 col-md-6">
                        <motion.h1
                            className="display-5 fw-bold"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            About <span className="text-primary">GROWATT INFOSYSTEM</span>
                        </motion.h1>

                        <motion.p
                            className="lead"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Welcome to <strong>GROWATT INFOSYSTEM</strong>, a leading{" "}
                            <strong>logo and branding agency</strong> helping businesses
                            create a strong <strong>brand identity</strong>.
                        </motion.p>

                        <motion.p
                            className="lead"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Our team of <strong>designers</strong>,{" "}
                            <strong>developers</strong>, and{" "}
                            <strong>branding specialists</strong> work together to help our
                            clients <strong>achieve their business goals</strong>.
                        </motion.p>

                        <motion.div
                            className="p-4 bg-light rounded"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-envelope text-dark fs-4 me-3"></i>
                                <div>
                                    <p className="mb-0 text-muted">Email Us</p>
                                    <a
                                        href="mailto:work@growattinfosystem.com"
                                        className="fw-bold text-dark"
                                    >
                                        work@growattinfosystem.com
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fab fa-whatsapp text-dark fs-4 me-3"></i>
                                <div>
                                    <p className="mb-0 text-muted">WhatsApp Us</p>
                                    <a href="tel:+919558198701" className="fw-bold text-dark">
                                        +91 95581 98701
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Section (Image) */}
                    <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
                        <motion.img
                            src="https://www.sagipl.com/images/hire-web/ui-designer.webp"
                            alt="Illustration"
                            className="img-fluid rounded"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 10 }}>
                <a
                    href="https://wa.me/9023608908?text=Hello how can i help you?"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsapp} width="40" alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
}

export default About;
