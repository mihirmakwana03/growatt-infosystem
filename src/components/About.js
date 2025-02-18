
import whatsapp from "../images/whatsapp.png";

function About() {
  return (
    <div className="bg-dark text-white font-roboto position-relative">
      <div className="container py-5">
        <div
          className="bg-dark d-flex align-items-center justify-content-center min-vh-60 text-white px-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">About Us</h1>
            <p className="lead">
              <span className="fw-semibold">GROWATT INFOSYSTEM </span>{" "}
              <span className="text-primary">&gt;About us</span>
            </p>
          </div>
        </div>

        {/* Header Section */}
        <header>
          <h1 className="text-center display-4 fw-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-center mb-4 lead">
            We are proud to <strong>introduce</strong> you to the{" "}
            <strong>talented individuals</strong> who make up our team. Each
            member brings a <strong>unique set of skills and expertise</strong>,
            contributing to our <strong>collective success</strong>.
          </p>
        </header>

        {/* Team Members */}
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <div className="card bg-dark text-white border-0 rounded-4 shadow-lg hover-effect">
              <div className="card-body text-center">
                <i className="fa fa-quote-left text-info fs-2"></i>
                <img
                  src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg"
                  alt="Vishal Ponkiya"
                  className="rounded-circle my-3"
                  width="200"
                  height="200"
                />
                <h5 className="card-title fw-bold">Vishal Ponkiya</h5>
                <p className="text-primary">CEO & Founder</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-dark text-white border-0 rounded-4 shadow-lg hover-effect">
              <div className="card-body text-center">
                <i className="fa fa-quote-left text-info fs-2"></i>
                <img
                  src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg"
                  alt="Meet Ponkiya"
                  className="rounded-circle my-3"
                  width="200"
                  height="200"
                />
                <h5 className="card-title fw-bold">Meet Ponkiya</h5>
                <p className="text-primary">CFO & Co-Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark text-white py-5">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                About <span className="text-primary">GROWATT INFOSYSTEM</span>
              </h1>
              <p className="mt-3 lead text-sm" style={{ textAlign: "justify" }}>
                Welcome to <strong>GROWATT INFOSYSTEM</strong>, formerly known
                as <strong>GROWATT INFOSYSTEM Studio</strong>, a leading{" "}
                <strong>logo and branding agency</strong> dedicated to helping
                businesses establish a strong and memorable{" "}
                <strong>brand identity</strong>.
              </p>

              <p className="mt-3 lead text-sm" style={{ textAlign: "justify" }}>
                Our team of talented <strong>designers</strong>,{" "}
                <strong>developers</strong>, and{" "}
                <strong>branding specialists</strong> brings a wealth of
                experience and knowledge to every project. We strive to
                revolutionize the way businesses perceive and utilize branding,{" "}
                <strong>helping our clients</strong> establish a lasting
                connection with their customers and achieve their business
                objectives.
              </p>
              <div className="mt-4 p-4 bg-light rounded-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-envelope text-white me-3 fs-4"></i>
                  <div>
                    <p
                      className="mb-0 small text-dark"
                      style={{ textAlign: "justify" }}
                    >
                      Email Us
                    </p>
                    <a
                      href="mailto:work@hexonbranding.com"
                      className="text-danger fw-bold"
                    >
                      work@growattinfosystem.com
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-whatsapp text-white me-3 fs-4"></i>
                  <div>
                    <p
                      className="mb-0 small text-dark"
                      style={{ textAlign: "left" }}
                    >
                      WhatsApp Us
                    </p>
                    <a
                      href="https://wa.me/9023608908?text=Hello how can i help you?"
                      className="fw-bold"
                      style={{ color: "green" }}
                    >
                      +91 9558198701
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 mt-2 mt-md-0">
              <img
                src="https://hexonbranding.com/wp-content/uploads/2024/05/About.png"
                alt="Illustration"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button - Moved Outside */}
      <div
        className="position-fixed bottom-4 end-4 p-3 rounded-circle shadow-lg"
        style={{ zIndex: 1000, right: "20px", bottom: "20px" }}
      >
        <a
          href="https://wa.me/9023608908?text=Hello how can I help you?"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={whatsapp}
            width="50"
            alt="WhatsApp"
            // className="rounded-circle"
          />
        </a>
      </div>
    </div>
  );
}

export default About;
