import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import "./testimonal.css";

const AddTestimonial = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [testimonials, setTestimonials] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // State for modal position and dragging
    const [modalPosition, setModalPosition] = useState({ x: 50, y: 50 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const res = await axios.get("http://localhost:5000/testimonials");
            setTestimonials(res.data);
        } catch (error) {
            console.error("❌ Error fetching testimonials:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/testimonials", { name, message, rating });
            setName("");
            setMessage("");
            setRating(0);
            setSuccessMessage("✅ Testimonial added successfully!");

            setTimeout(() => {
                setShowModal(false);
                setSuccessMessage("");
                fetchTestimonials();
            }, 1500);
        } catch (error) {
            console.error("❌ Error submitting testimonial:", error);
        }
    };

    // Dragging functions
    const handleMouseDown = (e) => {
        setDragging(true);
        setOffset({ x: e.clientX - modalPosition.x, y: e.clientY - modalPosition.y });
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            setModalPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div className="container mt-4" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            {/* Button to Open Modal */}
            {/* Stylish Floating Button */}
            <div className="floating-btn-container">
                <button className="floating-btn" onClick={() => setShowModal(true)}>
                    +
                </button>
            </div>

            {/* Movable Modal */}
            {showModal && (
                <div
                    className="modal-container"
                    style={{
                        position: "absolute",
                        left: `${modalPosition.x}px`,
                        top: `${modalPosition.y}px`,
                        cursor: dragging ? "grabbing" : "grab",
                    }}
                >
                    <div className="modal-content">
                        <div
                            className="modal-header draggable"
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                        >
                            <h5 className="modal-title text-primary">Add Testimonial</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            {successMessage && <div className="alert alert-success p-2 text-center">{successMessage}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label className="form-label fw-bold small">Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="form-label fw-bold small">Message</label>
                                    <textarea
                                        className="form-control form-control-sm"
                                        rows="2"
                                        placeholder="Your testimonial..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>

                                {/* Star Rating System */}
                                <div className="mb-2 text-center">
                                    <label className="form-label d-block small">Rate Us</label>
                                    {[...Array(5)].map((_, index) => {
                                        const currentRating = index + 1;
                                        return (
                                            <FaStar
                                                key={index}
                                                size={20}
                                                onClick={() => setRating(currentRating)}
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(null)}
                                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                className="mx-1 cursor-pointer"
                                            />
                                        );
                                    })}
                                </div>

                                <div className="d-flex justify-content-end mt-2">
                                    <button type="submit" className="btn btn-success btn-sm me-2">✅ Submit</button>
                                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => setShowModal(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Display Testimonials */}
            <div className="mt-3">
                <h2 className="text-left">Testimonials</h2>
                {testimonials.length > 0 ? (
                    testimonials.map((testimonial) => (
                        <div key={testimonial._id} className="card p-2 mb-2 shadow-sm">
                            <h6 className="mb-1">{testimonial.name}</h6>
                            <p className="small">{testimonial.message}</p>
                            <div>
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        size={16}
                                        color={index < testimonial.rating ? "#ffc107" : "#e4e5e9"}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted small">No testimonials yet.</p>
                )}
            </div>
        </div>
    );
};

export default AddTestimonial;
