import React from 'react';
import Hero from '../components/Hero';
import GetInTouch from '../components/GetInTouch';
import Gallery from '../components/Gallery';

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Reach Out For Bookings & Inquiries"
      />
      {/* Other Contact page content */}
      <GetInTouch />
      <Gallery />
    </div>
  );
};

export default Contact;
