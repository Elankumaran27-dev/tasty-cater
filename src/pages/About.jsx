import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AboutCounterSection from '../components/AboutCounterSection';
import OurTeam from '../components/OurTeam';

const About = () => {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Know More About Our Catering Services"
      />
      {/* Other About page content */}
      <AboutSection />
      <AboutCounterSection />
      <OurTeam />
    </div>
  );
};

export default About;
