import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';

const Menu = () => {
  return (
    <div>
      <Hero
        title="Our Menu"
        subtitle="Explore Our Delicious Dishes"
      />
      {/* Other Menu page content */}
      <MenuSection />
    </div>
  );
};

export default Menu;
