import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrFormNext } from "react-icons/gr";
import "./Portfolio.css"; // Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Portfolio = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [category, setCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetchPortfolio(category);
    }, [category]);

    const fetchPortfolio = async (category) => {
        try {
            const url = category === "all" ? `${API_URL}/portfolio` : `${API_URL}/portfolio?type=${category}`;
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.error("❌ Fetch error:", error);
            setError("Failed to fetch portfolio items.");
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center fw-bold" style={{ color: "#f2912a" }}>
                <a href="/portfolio" style={{ color: "#f2912a" }}>Portfolio</a>
            </h1>
            <hr />
            {/* 🔹 Dropdown Filter */}
            <div className="mb-4 text-end">
                <select
                    className="form-select w-auto d-inline-block"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="logodesign">Logo Design</option>
                    <option value="brandidentitydesign">Brand Identity</option>
                    <option value="packagingdesign">Packaging Design</option>
                    <option value="businesscarddesign">Business Card Design</option>
                    <option value="letterheaddesign">Letterheads</option>
                    <option value="labeldesign">Label Design</option>
                    <option value="flexdesign">Flex Design</option>
                    <option value="catalogdesign">Catalog Design</option>
                    <option value="brochuredesign">Brochure Design</option>
                    <option value="bannerdesign">Banner Design</option>
                </select>
            </div>

            {error && <p className="text-center text-danger">{error}</p>}

            {/* 🔹 Fixed Gallery Layout */}
            <div className="gallery">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div className="gallery-item" key={item._id}>
                            <div className="card">
                                <img
                                    src={`${API_URL}${item.imageUrl}`}
                                    className="gallery-img"
                                    alt={item.title}
                                    crossOrigin="anonymous"
                                    onClick={() => setSelectedImage(`${API_URL}${item.imageUrl}`)} // Open Modal
                                    data-bs-toggle="modal"
                                    data-bs-target="#imageModal"
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted">No Portfolio Items Available</p>
                )}
            </div>

            {/* 🔹 Bootstrap Modal for Image Preview */}
            <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="imageModalLabel">Image Preview</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            {selectedImage ? (
                                <img src={selectedImage} className="img-fluid" alt="Selected" />
                            ) : (
                                <p className="text-muted">No Image Selected</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
