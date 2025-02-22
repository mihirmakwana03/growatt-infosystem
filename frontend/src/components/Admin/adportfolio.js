import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// DataCard Component
const DataCard = ({ data, handleInsert, handleDelete }) => {
  return (
    <div className="container">
      <h1
        className="text-left mb-2 fw-bolder"
        style={{
          color: "#f2912a",
          textDecorationLine: "underline",
          textDecorationStyle: "double",
        }}
      >
        Portfolio
      </h1>
      <div className="text-center mb-3">
        <button className="btn btn-primary w-100" onClick={handleInsert}>
          Insert Data
        </button>
      </div>

      <div className="row">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="card-text">
                    <strong>Title:</strong> {item.title}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {item.description}
                  </p>
                  {item.file && (
                    <img
                      src={URL.createObjectURL(item.file)}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  )}
                  <div className="text-center mt-3">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No Data Available</p>
        )}
      </div>
    </div>
  );
};

// Adportfolio Component
const Adportfolio = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, file });
    setTitle("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4 fw-bold">Insert Data</h2>
      <form className="shadow p-4 rounded bg-light w-100" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="upload">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="upload"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

// Main Component (App)
const Data = () => {
  const [data, setData] = useState([]); // State to manage data
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  // Simulate insert data via backend
  const handleInsert = () => {
    setShowForm(true);
  };

  // Simulate form submission to backend
  const handleFormSubmit = (formData) => {
    setShowForm(false);
    setTimeout(() => {
      setData((prevData) => [...prevData, formData]);
    }, 500); // Simulate backend delay
  };

  // Simulate delete data via backend
  const handleDelete = (index) => {
    setTimeout(() => {
      setData((prevData) => prevData.filter((_, i) => i !== index)); // Remove the specific item
    }, 500); // Simulate backend delay
  };

  return (
    <div className="container mt-4">
      <DataCard data={data} handleInsert={handleInsert} handleDelete={handleDelete} />
      {showForm && <Adportfolio onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default Data;
