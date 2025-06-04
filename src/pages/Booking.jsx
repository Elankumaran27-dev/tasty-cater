import React from 'react';
import Hero from '../components/Hero';
import BookUsSection from '../components/BookUsSection';

const Booking = () => {
  return (
    <div>
      <Hero
        title="Book Now"
        subtitle="Reserve Your Date For A Delicious Experience"
      />
      {/* Other Booking page content */}
      <BookUsSection />
    </div>
  );
};

export default Booking;
