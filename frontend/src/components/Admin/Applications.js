import React, { useEffect, useState } from "react";

const ApplicationForm = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editableId, setEditableId] = useState(null); // Track which application is being edited
    const [editedData, setEditedData] = useState({}); // Store edited values

    useEffect(() => {
        fetchApplications();
    }, []);

    // ✅ Fetch Applications
    const fetchApplications = async () => {
        try {
            const response = await fetch("http://localhost:5000/applications");
            if (!response.ok) {
                throw new Error("Failed to fetch applications");
            }
            const data = await response.json();
            setApplications(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    // ✅ Handle Edit Click
    const handleEditClick = (app) => {
        setEditableId(app._id);
        setEditedData(app);
    };

    // ✅ Handle Save Click (Update Application)
    const handleSaveClick = async () => {
        try {
            const response = await fetch(`http://localhost:5000/applications/${editableId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editedData),
            });

            if (!response.ok) throw new Error("Failed to update application");

            setApplications((prev) =>
                prev.map((app) => (app._id === editableId ? editedData : app))
            );

            setEditableId(null);
        } catch (error) {
            console.error("❌ Error updating application:", error);
            alert("❌ Failed to update application.");
        }
    };

    // ✅ Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    // ✅ Delete Application
    const deleteApplication = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/applications/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Failed to delete application");

            setApplications((prev) => prev.filter((app) => app._id !== id));
            alert("✅ Application deleted successfully!");
        } catch (error) {
            console.error("❌ Error deleting application:", error);
            alert("❌ Failed to delete application.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold text-primary">Job Applications</h2>
            <hr />

            {/* ✅ Loading Spinner */}
            {loading && (
                <div className="text-center mt-4">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            )}

            {/* ✅ Error Message */}
            {error && <p className="text-danger text-center">{error}</p>}

            {/* ✅ Applications List as Editable Cards */}
            {!loading && !error && applications.length > 0 ? (
                applications.map((app) => (
                    <div key={app._id} className="card mb-4 p-3 shadow">
                        <div className="mt-3">
                            <h6 className="text-muted">Job Title</h6>
                            {editableId !== app._id ? (
                                <p>{app.jobTitle}</p>
                            ) : (
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={editedData.jobTitle}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            )}
                        </div>

                        <div className="mt-3">
                            <h6 className="text-muted">Applicant Name</h6>
                            {editableId !== app._id ? (
                                <p>{app.name}</p>
                            ) : (
                                <input
                                    type="text"
                                    name="name"
                                    value={editedData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            )}
                        </div>

                        <div className="mt-3">
                            <h6 className="text-muted">Email</h6>
                            {editableId !== app._id ? (
                                <p>{app.email}</p>
                            ) : (
                                <input
                                    type="email"
                                    name="email"
                                    value={editedData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            )}
                        </div>

                        <div className="mt-3">
                            <h6 className="text-muted">Resume</h6>
                            <a href={`http://localhost:5000${app.resume}`} target="_blank" rel="noopener noreferrer">
                                View Resume
                            </a>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-danger btn-sm" onClick={() => deleteApplication(app._id)}>
                                Delete Application
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                !loading && <p className="text-muted text-center">No applications found.</p>
            )}
        </div>
    );
};

export default ApplicationForm;
