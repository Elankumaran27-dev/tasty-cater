// src/components/ServicesSection.jsx
import React from 'react';
import './Services.css';
import { FaUtensils, FaBirthdayCake, FaGlassCheers, FaCogs, FaUserTie, FaHamburger, FaLeaf, FaFish } from 'react-icons/fa';

const services = [
  { icon: <FaUtensils />, title: 'Wedding Catering', description: 'Delicious food for your big day.' },
  { icon: <FaBirthdayCake />, title: 'Birthday Parties', description: 'Celebrate with tasty treats.' },
  { icon: <FaGlassCheers />, title: 'Corporate Events', description: 'Professional service for businesses.' },
  { icon: <FaCogs />, title: 'Custom Menus', description: 'Tailored menus for every occasion.' },
  { icon: <FaUserTie />, title: 'Private Chef', description: 'Exclusive dining experiences.' },
  { icon: <FaHamburger />, title: 'Outdoor BBQ', description: 'Smoky and sizzling grills.' },
  { icon: <FaLeaf />, title: 'Vegetarian', description: 'Healthy and fresh dishes.' },
  { icon: <FaFish />, title: 'Seafood Special', description: 'Fresh catch, served right.' },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <small className="d-inline-block fw-bold text-primary text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            Our Services
          </small>
          <h2 className="display-6">What We Offer</h2>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="service-card p-4 text-center shadow-sm rounded position-relative overflow-hidden h-100">
                <div className="icon mb-3">{service.icon}</div>
                <h5 className="mb-2">{service.title}</h5>
                <p className="text-muted mb-0">{service.description}</p>
                <span className="hover-bg"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
