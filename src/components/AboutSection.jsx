// src/components/AboutSection.jsx
import React, { useEffect } from 'react';
import './AboutSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Side Image */}
          <div
            className="col-lg-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
              alt="About Us"
              className="img-fluid rounded about-img"
            />
          </div>

          {/* Right Side Content */}
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <small className="d-inline-block text-uppercase text-primary fw-bold bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              About Us
            </small>
            <h1 className="mb-4">We Serve Quality Food with Love</h1>
            <p className="mb-4">
              We are passionate about bringing delicious and memorable meals to every event. Whether it's a wedding, birthday, or corporate event, we ensure every dish is crafted with perfection and served with care.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Fresh & Hygienic Ingredients</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Timely Service Guaranteed</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Customized Menu Options</li>
            </ul>
            <a href="#contact" className="btn btn-primary px-4 py-2">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
