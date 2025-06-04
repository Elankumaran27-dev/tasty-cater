import React from 'react';
import Hero from '../components/Hero';
import EventsSection from '../components/EventsSection';
import BookUsSection from '../components/BookUsSection';

const Events = () => {
  return (
    <div>
      <Hero
        title="Our Events"
        subtitle="Memorable Occasions, Perfectly Catered"
      />
      {/* Other Events page content */}
      <EventsSection />
      <BookUsSection />
    </div>
  );
};

export default Events;
