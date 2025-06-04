import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, showButtons = true }) => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-3 text-white mb-3 animated slideInDown">{title}</h1>
        <h4 className="text-white mb-4 animated slideInDown">{subtitle}</h4>
        {showButtons && (
          <div className="d-flex justify-content-center gap-3 animated slideInUp">
            <Link to="/booking" className="btn btn-primary rounded-pill px-4">
              Book Now
            </Link>
            <Link to="/about" className="btn btn-outline-light rounded-pill px-4">
              Know More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
