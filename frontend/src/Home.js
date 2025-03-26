import React from "react";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import TestimonialPage from "./components/pages/testimonial";

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold" style={{ color: "#f2912a" }}>
        <a href="/" style={{ color: "#f2912a" }}>Home</a>
      </h1>
      <hr />
      <hr />
      <Portfolio />
      <hr />
      <About />
      <hr />
      <Contact />
      <hr />
      <TestimonialPage />
      <hr />
    </div>
  );
}

export default Home;
