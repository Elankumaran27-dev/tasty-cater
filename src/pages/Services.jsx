import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Services = () => {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="What We Offer For Your Occasions"
      />
      {/* Other Services page content */}
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Services;
