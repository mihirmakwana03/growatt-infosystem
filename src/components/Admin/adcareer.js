import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdCareer = () => {
  return (
    <div className="container mt-2">
      <h1
        className="text-left mb-4 fw-bolder"
        style={{
          color: "#f2912a",
          textDecorationLine: "underline",
          textDecorationStyle: "double",
        }}
      >
        Career
      </h1>
    </div>
  );
};

const AdInsertCareer = () => {
  return (
    <div className="container mt-3">
      <h2 className="fw-bolder">Career Portal</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label fw-bold">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            placeholder="Enter job title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jobShortDescription" className="form-label fw-bold">
            Short Description
          </label>
          <textarea
            className="form-control"
            id="jobDescription"
            rows="2"
            placeholder="Enter Short job description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="jobDescription" className="form-label fw-bold">
            Job Description
          </label>
          <textarea
            className="form-control"
            id="jobDescription"
            rows="3"
            placeholder="Enter job description"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="jobRequirements" className="form-label fw-bold">
            Job Requirements
          </label>
          <textarea
            className="form-control"
            id="jobRequirements"
            rows="2"
            placeholder="Enter job requirements"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="jobLocation" className="form-label fw-bold">
            Job Location
          </label>
          <input
            type="text"
            className="form-control"
            id="jobLocation"
            placeholder="Enter job location"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jobType" className="form-label fw-bold">
            Job Type
          </label>
          <select className="form-select" id="jobType">
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// export default AdInsertCareer;
export default AdCareer;
