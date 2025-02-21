import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        // Animate sections on scroll
        gsap.utils.toArray("section").forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        });

        // Animate statistics numbers
        gsap.from(".stat-item", {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".stats",
                start: "top 85%",
            },
        });

        // Animate portfolio items
        gsap.from(".portfolio-item", {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".portfolio",
                start: "top 85%",
            },
        });

    }, []);

    return (
        <>
            <Header />
            <main className="content">
                <section className="intro">
                    <h1>Design that Impress</h1>
                </section>
                <DotLottieReact
                    src="https://lottie.host/b1b79499-e2c4-4918-a456-e439cfa27810/G680bqgu9I.lottie"
                    loop
                    autoplay
                    style={{ width: "50%", height: "50%" }}
                    speed={0.7}
                />
                <p className="subtitle">Your One-Stop Solution for Branding</p>

                <section className="stats">
                    <div className="stat-item">
                        <h3>150+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat-item">
                        <h3>5+ Years</h3>
                        <p>Industry Experience</p>
                    </div>
                    <div className="stat-item">
                        <h3>200+</h3>
                        <p>Satisfied Clients</p>
                    </div>
                </section>

                <section className="services">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Logo Design</li>
                        <li>Brand Identity Design</li>
                        <li>Packaging Design</li>
                        <li>Business Card Design</li>
                        <li>Letterheads</li>
                        <li>Label Design</li>
                        <li>Flex Design</li>
                        <li>Catalog Design</li>
                        <li>Brochure Design</li>
                        <li>Banner Design</li>
                    </ul>
                </section>

                <section className="portfolio">
                    <h2>Our Portfolio</h2>
                    <div className="portfolio-items">
                        <div className="portfolio-item">Project 1</div>
                        <div className="portfolio-item">Project 2</div>
                        <div className="portfolio-item">Project 3</div>
                        <div className="portfolio-item">Project 4</div>
                    </div>
                </section>

                <section className="testimonials">
                    <h2>Client Testimonials</h2>
                    <div className="testimonial">
                        <p>"Amazing work! Highly recommend their services."</p>
                        <p>- Client A</p>
                    </div>
                    <div className="testimonial">
                        <p>"Professional and creative designs. Very satisfied."</p>
                        <p>- Client B</p>
                    </div>
                    <div className="testimonial">
                        <p>"Great attention to detail and excellent customer service."</p>
                        <p>- Client C</p>
                    </div>
                </section>

                <section className="contact">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="tel" placeholder="Contact Number" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Home;
