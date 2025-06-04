import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">TastyCater</h5>
            <p>
              Providing exceptional catering services for all your events. Quality food and outstanding service guaranteed.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
            <p><Link to="/" className="text-light">Home</Link></p>
            <p><Link to="/about" className="text-light">About</Link></p>
            <p><Link to="/services" className="text-light">Services</Link></p>
            <p><Link to="/contact" className="text-light">Contact</Link></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
            <p><Link to="/booking" className="text-light">Booking</Link></p>
            <p><Link to="/blog" className="text-light">Blog</Link></p>
            <p><Link to="/team" className="text-light">Team</Link></p>
            <p><Link to="/testimonial" className="text-light">Testimonials</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> Chennai, India</p>
            <p><i className="fas fa-envelope mr-3"></i> info@tastycater.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 12345 67890</p>
            <p><i className="fas fa-print mr-3"></i> +91 09876 54321</p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Social icons row */}
        <div className="row mb-3">
          <div className="col text-center">
            <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-light"><i className="fab fa-facebook-f fa-lg"></i></a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#" className="text-light"><i className="fab fa-twitter fa-lg"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light"><i className="fab fa-google-plus-g fa-lg"></i></a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#" className="text-light"><i className="fab fa-linkedin-in fa-lg"></i></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered copyright */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="mb-0">© {new Date().getFullYear()} TastyCater. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
