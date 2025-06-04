// src/components/Gallery.jsx
import React from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import nonVegMeals from "../assets/Images/nonVeg_meals.jpg"
import masalaDosa from "../assets/Images/masalaDosa.jpg"
import miniTiffen from "../assets/Images/mini_tiffen.jpg"
import chickenBriyani from "../assets/Images/chicken_briyani.jpg"

const Gallery = () => {
  return (
    <section className="gallery-section py-5">
      <div className="container">
        <motion.div
          className="row g-5 align-items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Column: Text + Social + Contact */}
          <div className="col-lg-6">
            <h2 className="mb-3">Our Delicious Moments</h2>
            <p className="mb-4">
              Discover how we turn every event into a flavorful memory with our traditional South Indian dishes and personalized service. Follow us and connect!
            </p>

            {/* Social Icons */}
            <div className="social-icons d-flex gap-3 mb-4">
              <a href="#" className="icon-circle"><FaFacebookF /></a>
              <a href="#" className="icon-circle"><FaTwitter /></a>
              <a href="#" className="icon-circle"><FaInstagram /></a>
            </div>

            {/* Contact Details */}
            <ul className="list-unstyled contact-info">
              <li><FaPhoneAlt className="me-2" /> +91 80985 64048</li>
              <li><FaEnvelope className="me-2" /> contact@tastycater.com</li>
              <li><FaMapMarkerAlt className="me-2" /> 123, Tasty Street, Chennai, India</li>
            </ul>
          </div>

          {/* Right Column: Image Grid */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <img
                  src= {masalaDosa}
                  alt="Masala Dosa"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-6">
                <img
                  src={miniTiffen}
                  alt="Mini Tiffen"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-6">
                <img
                  src= {nonVegMeals}
                  alt="Non Veg Meals"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-6">
                <img
                  src={chickenBriyani}
                  alt="Chicken Briyani"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
