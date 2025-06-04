import React from 'react';
import Hero from '../components/Hero';
import OurTeam from '../components/OurTeam';

const Team = () => {
  return (
    <div>
      <Hero
        title="Our Team"
        subtitle="Meet Our Professional Chefs & Staff"
      />
      {/* Other Team page content */}
      <OurTeam />
    </div>
  );
};

export default Team;
