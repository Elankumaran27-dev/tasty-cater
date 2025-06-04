import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AboutCounterSection from '../components/AboutCounterSection';
import ServicesSection from '../components/ServicesSection';
import EventsSection from '../components/EventsSection';
import MenuSection from '../components/MenuSection';
import BookUsSection from '../components/BookUsSection';
import OurTeam from '../components/OurTeam';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);

    const handleStorageChange = () => {
      const updatedStatus = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(updatedStatus);
    };

    // Listen to localStorage changes (if user logs in from modal)
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <Hero
        title="Welcome"
        subtitle="Enjoy The Best Catering Experience"
      />
      <AboutSection />
      <AboutCounterSection />
      <ServicesSection />
      <EventsSection />
      <MenuSection />
      
      {/* ✅ Show BookUsSection only if user is logged in */}
      {isLoggedIn && <BookUsSection />}

      <OurTeam />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
};

export default Home;
