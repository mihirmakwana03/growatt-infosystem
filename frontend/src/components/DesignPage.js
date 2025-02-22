import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DesignPage = ({ title, images }) => {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleShow = (image) => {
        setSelectedImage(image);
        setShow(true);
    };

    return (
        <div className="container text-center py-5">
            {/* Animated Heading */}
            <motion.h1
                className="display-4 fw-bold mb-4"
                style={{ color: "#f47a20" }} // Custom orange color
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {title}
            </motion.h1>

            {/* Animated Description */}
            <motion.p
                className="lead text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                Explore our creative and professional {title.toLowerCase()} designs.
            </motion.p>

            {/* Design Gallery */}
            <div className="row mt-4">
                {images.map((image, index) => (
                    <motion.div
                        className="col-md-3 col-sm-6 mb-4"
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        onClick={() => handleShow(image)}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src={image}
                            alt={`${title} ${index + 1}`}
                            className="img-fluid rounded shadow"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Modal for Enlarged View */}
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Body className="text-center">
                    <img src={selectedImage} alt="Enlarged Design" className="img-fluid rounded shadow-lg" />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DesignPage;
