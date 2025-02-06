import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// DataCard Component
const DataCard = ({ data, handleInsert, handleDelete }) => {
  return (
    <div className="container row">
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
      <div className="col-12 mt-2 mb-2">
        <button className="btn btn-primary me-2" onClick={handleInsert}>
          Insert Data
        </button>
      </div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4" style={{ width: "18rem" }}>
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
                    style={{ width: "100%" }}
                  />
                )}
                <center>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </center>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="card-text"></p>
      )}
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
    <div className="container mt-2">
      <h1 className="text-left mb-4 fw-bold">Insert Data</h1>
      <form className="shadow p-4 rounded bg-light" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title"></label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description"></label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="upload">Upload Image</label>
          <input
            type="file"
            className="form-control-file"
            id="upload"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-block mt-4">
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
      const newData = [...data, formData];
      setData(newData);
    }, 1000); // Simulate backend delay
  };

  // Simulate delete data via backend
  const handleDelete = (index) => {
    setTimeout(() => {
      const newData = data.filter((_, i) => i !== index); // Remove the specific item
      setData(newData);
    }, 1000); // Simulate backend delay
  };

  return (
    <div className="container mt-5">
      <DataCard
        data={data}
        handleInsert={handleInsert}
        handleDelete={handleDelete}
      />
      {showForm && <Adportfolio onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default Data;
