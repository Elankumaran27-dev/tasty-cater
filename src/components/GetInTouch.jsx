// src/components/GetInTouch.jsx
import React from 'react';
import './GetInTouch.css';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <section className="get-in-touch-section py-5">
      <div className="container">
        <motion.div
          className="row g-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left: Form */}
          <div className="col-lg-7">
            <h2 className="mb-4">Get In Touch</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea rows="5" className="form-control" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4 rounded-pill">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="col-lg-5">
            <h2 className="mb-4">Contact Details</h2>
            <p><strong>Address:</strong> 123 Street, Your City, India</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> support@tastycater.com</p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
