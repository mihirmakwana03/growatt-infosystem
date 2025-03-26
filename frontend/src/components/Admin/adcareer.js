import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button, Modal } from "react-bootstrap";

const API_URL = "http://localhost:5000/careers"; // ✅ API Endpoint

const CareerSection = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [formState, setFormState] = useState({
    jobTitle: "",
    shortDescription: "",
    jobDescription: "",
    jobRequirements: "",
    jobLocation: "",
    jobType: "full-time",
    jobEndDate: "", // ✅ Added Job Ending Date
  });

  // Fetch Careers
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(API_URL);
        setCareers(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch careers. Please try again later.");
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Insert Career
  const handleInsertCareer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, formState);
      setCareers([...careers, response.data.career]);
      setShowForm(false);
      setFormState({
        jobTitle: "",
        shortDescription: "",
        jobDescription: "",
        jobRequirements: "",
        jobLocation: "",
        jobType: "full-time",
        jobEndDate: "",
      });
    } catch (error) {
      setError("Failed to add career. Please try again.");
    }
  };

  // Delete Career
  const [careerIdToDelete, setCareerIdToDelete] = useState(null);

  const handleDeleteCareer = (id) => {
    setCareerIdToDelete(id);
    document.getElementById("deleteModalTrigger").click();
  };

  const confirmDelete = async () => {
    if (!careerIdToDelete) return;

    try {
      await axios.delete(`${API_URL}/${careerIdToDelete}`);
      setCareers(careers.filter((career) => career._id !== careerIdToDelete));
      setCareerIdToDelete(null);
    } catch (error) {
      setError("Failed to delete career. Please try again.");
    }
  };



  useEffect(() => {
    if (selectedCareer) {
      console.log("Modal should be showing:", selectedCareer);
    }
  }, [selectedCareer]);

  return (
    <div className="container mt-4">
      <h1 className="text-left mb-4 fw-bolder" style={{ color: "#f2912a", textDecoration: "underline double" }}>
        Career Opportunities
      </h1>

      {/* Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Insert Career Button */}
      <button className="btn btn-primary w-100 mb-3" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add Career"}
      </button>

      {/* Loading State */}
      {loading && <p className="text-center text-muted">Loading careers...</p>}

      {/* Careers List */}
      <div className="row">
        {careers.length > 0 ? (
          careers.map((career) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={career._id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="card-text"><strong>Job Title:</strong> {career.jobTitle}</p>
                  <p className="card-text"><strong>Location:</strong> {career.jobLocation}</p>
                  <p className="card-text"><strong>Type:</strong> {career.jobType}</p>
                  <p className="card-text"><strong>Ending Date: </strong>
                    {career.jobEndDate ? new Date(career.jobEndDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) : "N/A"}
                  </p>
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => {
                        console.log("Selected Career:", career); // Debugging
                        setSelectedCareer(career);
                      }}
                    >
                      View Details
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => handleDeleteCareer(career._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-muted">No Career Listings Available</p>
        )}
      </div>

      {/* Insert Career Form */}
      {selectedCareer && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary">{selectedCareer.jobTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedCareer(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Description:</strong> {selectedCareer.jobDescription}</p>
                <p><strong>Requirements:</strong> {selectedCareer.jobRequirements}</p>
                <p><strong>Location:</strong> {selectedCareer.jobLocation}</p>
                <p><strong>Type:</strong> {selectedCareer.jobType}</p>
                <p><strong>Ending Date:</strong> {selectedCareer.jobEndDate ? new Date(selectedCareer.jobEndDate).toLocaleDateString() : "N/A"}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedCareer(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">Confirm Deletion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={confirmDelete} data-bs-dismiss="modal">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        id="deleteModalTrigger"
        type="button"
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
      ></button>

    </div>
  );
};

export default CareerSection;

