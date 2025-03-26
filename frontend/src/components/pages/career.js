import React, { useEffect, useState, useRef } from "react";
import { GrFormNext } from "react-icons/gr";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Import reCAPTCHA

const RECAPTCHA_SITE_KEY = "6LdtrvgqAAAAABmj3YRQhv7d-YzEOjkts7TyH9gR";

function Career() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", resume: null });
    const [submitMessage, setSubmitMessage] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null); // ✅ Store CAPTCHA token

    const recaptchaRef = useRef(null); // ✅ Ref for reCAPTCHA

    useEffect(() => {
        fetch("http://localhost:5000/careers")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                return response.json();
            })
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleApply = (job) => {
        setSelectedJob(job);
        setShowForm(true);
        setSubmitMessage(null);
        setCaptchaToken(null); // ✅ Reset CAPTCHA
        if (recaptchaRef.current) recaptchaRef.current.reset(); // ✅ Reset reCAPTCHA UI
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    // ✅ Handle reCAPTCHA verification
    const handleCaptchaVerify = (token) => {
        console.log("✅ reCAPTCHA Token:", token);
        setCaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.resume) {
            setSubmitMessage({ type: "error", text: "All fields are required!" });
            return;
        }

        if (!captchaToken) {
            setSubmitMessage({ type: "error", text: "Please complete the CAPTCHA!" });
            return;
        }

        const applicationData = new FormData();
        applicationData.append("jobId", selectedJob._id);
        applicationData.append("jobTitle", selectedJob.jobTitle);
        applicationData.append("name", formData.name);
        applicationData.append("email", formData.email);
        applicationData.append("resume", formData.resume);
        applicationData.append("captcha", captchaToken); // ✅ Include reCAPTCHA token

        try {
            const response = await fetch("http://localhost:5000/applications", {
                method: "POST",
                body: applicationData,
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Failed to submit application");

            setSubmitMessage({ type: "success", text: "Application submitted successfully!" });

            setFormData({ name: "", email: "", resume: null });

            setTimeout(() => {
                setShowForm(false);
                setSelectedJob(null);
                setSubmitMessage(null);
            }, 1000);
        } catch (error) {
            setSubmitMessage({ type: "error", text: error.message });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center fw-bold" style={{ color: "#f2912a" }}>
                <a href="/" style={{ color: "#f2912a" }}>Home</a> <GrFormNext />
                <a href="/career" style={{ color: "#f2912a" }}>Career</a>
            </h1>
            <hr />

            {loading && <div className="text-center mt-4"><div className="spinner-border text-primary" role="status"></div></div>}
            {error && <p className="text-danger text-center">{error}</p>}

            {!loading && !error && (
                <table className="table table-bordered mt-4">
                    <thead className="table-dark">
                        <tr align="center">
                            <th>SR No.</th>
                            <th>Job Title</th>
                            <th>Short Description</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <tr key={job._id}>
                                    <td>{index + 1}</td>
                                    <td>{job.jobTitle}</td>
                                    <td>{job.shortDescription}</td>
                                    <td>{job.jobLocation}</td>
                                    <td><span className="badge bg-success">{job.jobType}</span></td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={() => handleApply(job)}>
                                            Apply
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center text-muted">No job listings available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}

            {showForm && selectedJob && (
                <div className="mt-4 p-4 border rounded bg-light shadow">
                    <h2 className="mb-3 text-primary">Apply for {selectedJob.jobTitle}</h2>

                    {submitMessage && (
                        <div className={`alert ${submitMessage.type === "success" ? "alert-success" : "alert-danger"}`}>
                            {submitMessage.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Full Name</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email Address</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Upload Resume (PDF)</label>
                            <input type="file" className="form-control" name="resume" accept=".pdf" onChange={handleFileChange} required />
                        </div>

                        {/* ✅ Add reCAPTCHA */}
                        <div className="mb-3 text-center">
                            <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaVerify} />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">Submit Application</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Career;
