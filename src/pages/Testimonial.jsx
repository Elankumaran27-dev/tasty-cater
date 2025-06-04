import React from 'react';
import Hero from '../components/Hero';
import TestimonialsSection from '../components/TestimonialsSection';

const Testimonial = () => {
  return (
    <div>
      <Hero
        title="Testimonials"
        subtitle="What Our Clients Say About Us"
      />
      {/* Other Testimonial content */}
      <TestimonialsSection />
    </div>
  );
};

export default Testimonial;
