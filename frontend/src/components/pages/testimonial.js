import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Marquee from "react-fast-marquee";
import "./testimonial.css";

const TestimonialPage = () => {
    const [testimonials, setTestimonials] = useState([]);

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

    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary">🌟 What Our Clients Say 🌟</h2>

            {/* Marquee Section */}
            <Marquee pauseOnHover speed={50} gradient={true} gradientWidth={50}>
                {testimonials.length > 0 ? (
                    testimonials.map((testimonial) => (
                        <div key={testimonial._id} className="testimonial-card mx-3 shadow">
                            <h6 className="mt-2">{testimonial.name}</h6>
                            <p className="small text-muted" style={{ maxWidth: "250px", whiteSpace: "normal" }}>
                                "{testimonial.message}"
                            </p>
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
                    <p className="text-muted">No testimonials yet.</p>
                )}
            </Marquee>
        </div>
    );
};

export default TestimonialPage;
