import whatsapp from "../images/whatsapp.png";
import "../index.css";

function About() {
  return (
    <>
      <div className="bg-gray-900 text-white font-roboto">
        <div className="container mx-auto py-0">
          <div
            className="bg-gray-900 flex items-center justify-center min-h-[30vh] text-white px-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg">
                <span className="font-semibold">GROWATT INFOSYSTEM </span>{" "}
                <span className="text-blue-500">&gt;About us</span>
              </p>
            </div>
          </div>

          {/* Header Section */}
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-color">Team</span>
            </h1>
            <p className="mb-4 text-lg">
              We are proud to <strong>introduce</strong> you to the{" "}
              <strong>talented individuals</strong> who make up our team. Each
              member brings a{" "}
              <strong>unique set of skills and expertise</strong>, contributing
              to our <strong>collective success</strong>.
            </p>
          </header>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Team Member 1 */}
            <div className="bg-gray-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 p-5 text-center">
              <i className="fas fa-quote-left text-blue-500 text-2xl"></i>
              <img
                src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg"
                alt="Vishal Ponkiya"
                className="rounded-full my-3 w-48 h-48 object-cover mx-auto"
              />
              <h5 className="text-xl font-bold">Vishal Ponkiya</h5>
              <p className="text-blue-500">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 p-5 text-center">
              <i className="fas fa-quote-left text-blue-500 text-2xl"></i>
              <img
                src="https://cdn.zeebiz.com/sites/default/files/2022/11/05/209096-virat-kohli-7-pti.jpg"
                alt="Meet Ponkiya"
                className="rounded-full my-3 w-48 h-48 object-cover mx-auto"
              />
              <h5 className="text-xl font-bold">Meet Ponkiya</h5>
              <p className="text-blue-500">CFO & Co-Founder</p>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-900 text-white py-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
              {/* Left Section */}
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold">
                  About <span className="text-color">GROWATT INFOSYSTEM</span>
                </h1>
                <p className="mt-3 text-lg">
                  Welcome to <strong>GROWATT INFOSYSTEM</strong>, formerly known
                  as <strong>GROWATT INFOSYSTEM Studio</strong>, a leading{" "}
                  <strong>logo and branding agency</strong> dedicated to helping
                  businesses establish a strong and memorable{" "}
                  <strong>brand identity</strong>.
                </p>
                <p className="mt-3 text-lg">
                  Our team of talented <strong>designers</strong>,{" "}
                  <strong>developers</strong>, and{" "}
                  <strong>branding specialists</strong> brings a wealth of
                  experience and knowledge to every project. We strive to
                  revolutionize the way businesses perceive and utilize
                  branding, <strong>helping our clients</strong> establish a
                  lasting connection with their customers and achieve their
                  business objectives.
                </p>
                <div className="mt-4 p-4 bg-gray-200 rounded-lg">
                  <div className=" flex items-center mb-3 ">
                    <i className="fas fa-envelope text-gray-900 mr-3 text-2xl"></i>
                    <div>
                      <p className="mb-0 text-sm text-gray-800">Email Us</p>
                      <a
                        href="mailto:work@hexonbranding.com"
                        className="text-gray-900 font-bold"
                      >
                        work@growattinfosystem.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-whatsapp text-gray-900 mr-3 text-2xl"></i>
                    <div>
                      <p className="mb-0 text-sm text-gray-800">Whatsapp Us</p>
                      <a
                        href="tel:+919558198701"
                        className="text-gray-900 font-bold"
                      >
                        +91 95581 98701
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="md:w-2/5 mt-5 md:mt-0">
                <img
                  src="https://www.sagipl.com/images/hire-web/ui-designer.webp"
                  alt="Illustration"
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>

          {/* WhatsApp Floating Button */}
          <div className="fixed bottom-4 right-4 p-3" style={{ zIndex: 6 }}>
            <a
              href="https://wa.me/9023608908?text=Hello how can i help you?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                width="40"
                alt="WhatsApp"
                // className="rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
