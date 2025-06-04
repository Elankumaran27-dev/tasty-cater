import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal/LoginModal';
import Toast from './Toast';
// import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showLogin, setShowLogin] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loginFromBooking, setLoginFromBooking] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleBookNowClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/booking');
      setIsMenuOpen(false);
    } else {
      const confirmLogin = window.confirm("You are not logged in. Do you want to login?");
      if (confirmLogin) {
        setLoginFromBooking(true);
        setShowLogin(true);
      }
    }
  };

  const handleLogout = () => {
    const mobile = localStorage.getItem('userMobile');
    if (mobile) {
      localStorage.removeItem(`bookings_${mobile}`);
    }
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userMobile');
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate('/');
  };

  const handleLoginSuccess = (mobile) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userMobile', mobile);
    window.dispatchEvent(new Event('storage'));

    setIsLoggedIn(true);
    setShowLogin(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    if (loginFromBooking) {
      navigate('/booking');
    } else {
      navigate('/');
    }

    setLoginFromBooking(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="container-fluid bg-white shadow-sm sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <Link className="navbar-brand fw-bold text-primary fs-3" to="/" onClick={() => setIsMenuOpen(false)}>
            Tasty<span className="text-dark">Cater</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span style={{ fontSize: '1.5rem', userSelect: 'none' }}>
              {isMenuOpen ? '×' : '☰'}
            </span>
          </button>

          <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarCollapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link" onClick={() => setIsMenuOpen(false)}>Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</NavLink>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </span>
                <ul className="dropdown-menu">
                  <li><NavLink to="/booking" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Booking</NavLink></li>
                  <li><NavLink to="/blog" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Our Blog</NavLink></li>
                  <li><NavLink to="/team" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Our Team</NavLink></li>
                  <li><NavLink to="/testimonial" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>Testimonial</NavLink></li>
                  <li><NavLink to="/404" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>404 Page</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              </li>

              {/* 👇 Login/Logout inside menu */}
              <li className="nav-item mt-2 mt-lg-0">
                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      setLoginFromBooking(false);
                      setShowLogin(true);
                      setIsMenuOpen(false);
                    }}
                    className="btn btn-outline-primary rounded-pill ms-lg-3"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger rounded-pill ms-lg-3"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>

            {/* Book Now stays outside */}
            <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
              <button
                onClick={handleBookNowClick}
                className="btn btn-primary rounded-pill"
              >
                Book Now
              </button>
            </div>
          </div>
        </nav>
      </div>

      {showLogin && (
        <LoginModal
          show={showLogin}
          onClose={() => setShowLogin(false)}
          onLogin={handleLoginSuccess}
        />
      )}

      {showToast && <Toast message="Login successful!" />}
    </div>
  );
};

export default Navbar;
