import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUpload, FaTimes, FaFileImage } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get(`${API_URL}/portfolio?timestamp=${new Date().getTime()}`);
      setData(response.data);
    } catch (error) {
      console.error("❌ Fetch error:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", file);
    formData.append("type", type);

    try {
      await axios.post(`${API_URL}/portfolio`, formData);

      // ✅ Refresh the entire page
      window.location.reload();

    } catch (error) {
      console.error("❌ Upload error:", error);
      alert("Failed to upload item.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setType("");
    setFile(null);
    setPreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold text-primary">Portfolio</h2>

      {/* ✅ Button to Open the Upload Modal */}
      <div className="text-center mb-3">
        <button className="btn btn-primary" onClick={() => setShowModal(true)} data-bs-toggle="modal" data-bs-target="#uploadModal">
          <FaUpload /> Add Portfolio Item
        </button>
        <hr />
      </div>

      {/* ✅ Portfolio Display */}
      <div className="row">
        {data.length > 0 ? (
          data.map((item) => (
            <div className="col-md-3 col-sm-6 mb-3" key={item._id}>
              <div className="card shadow-sm border-0">
                <img
                  src={`${API_URL}${item.imageUrl}`}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "150px", objectFit: "cover" }}
                  crossOrigin="anonymous"
                />
                <div className="card-body p-2">
                  <h6 className="card-title fw-bold text-truncate">{item.title}</h6>
                  <p className="card-text small text-truncate">Category: <span className="badge bg-primary">{item.type}</span></p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No Portfolio Items Available</p>
        )}
      </div>

      {/* ✅ Bootstrap Modal for Upload Form */}
      <div className="modal fade" id="uploadModal" tabIndex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-primary" id="uploadModalLabel">Upload Portfolio Item</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpload}>
                <div className="row">
                  {/* Left Column: Inputs */}
                  <div className="col-md-7">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Title</label>
                      <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Description</label>
                      <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Category</label>
                      <select className="form-select" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="">Select Type</option>
                        <option value="logodesign">🎨 Logo Design</option>
                        <option value="brandidentitydesign">🆔 Brand Identity</option>
                        <option value="packagingdesign">📦 Packaging Design</option>
                        <option value="businesscarddesign">💼 Business Card</option>
                        <option value="letterheaddesign">✍ Letterhead Design</option>
                        <option value="labeldesign">🏷 Label Design</option>
                        <option value="flexdesign">📐 Flex Design</option>
                        <option value="catalogdesign">📖 Catalog Design</option>
                        <option value="brochuredesign">📰 Brochure Design</option>
                        <option value="bannerdesign">🖼 Banner Design</option>
                      </select>
                    </div>
                  </div>

                  {/* Right Column: Image Upload Preview */}
                  <div className="col-md-5 text-center">
                    <label className="form-label fw-bold">Upload Image</label>
                    <div className="border rounded p-3 d-flex flex-column align-items-center">
                      {preview ? (
                        <img src={preview} className="img-fluid mb-2" style={{ maxHeight: "150px", objectFit: "cover" }} alt="Preview" />
                      ) : (
                        <FaFileImage size={50} className="text-secondary mb-2" />
                      )}
                      <input type="file" className="form-control" onChange={handleFileChange} required />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-3">
                  <button type="submit" className="btn btn-success me-2"><FaUpload /> Upload</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
