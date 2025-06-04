// src/components/MenuSection.jsx
import React, { useState } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

import dosaImg from '../assets/Images/masalaDosa.jpg';
import IdlyVadaImg from '../assets/Images/idly&vada.jpg';
import vegMeals from '../assets/Images/vegMeals.jpg';
import miniTiffen from '../assets/Images/mini_tiffen.jpg';
import chickenBriyani from '../assets/Images/famous_Briyani.jpg';
import mealsWithSambar from '../assets/Images/sambar_rice.jpg';
import pongalVada from '../assets/Images/pongal_Vada.jpg';
import parotta from '../assets/Images/Parota.jpg';

const allMenu = [
  {
    category: 'Breakfast',
    image: dosaImg,
    name: 'Masala Dosa',
    price: '70',
    desc: 'Crispy dosa filled with spiced potato masala.',
  },
  {
    category: 'Breakfast',
    image: IdlyVadaImg,
    name: 'Idli & Vada',
    price: '60',
    desc: 'Soft idlis with crispy medu vada and chutneys.',
  },
  {
    category: 'Meals',
    image: vegMeals,
    name: 'Veg Meals',
    price: '120',
    desc: 'Traditional South Indian veg meal on banana leaf.',
  },
  {
    category: 'Breakfast',
    image: miniTiffen,
    name: 'Mini Tiffin',
    price: '90',
    desc: 'Mini combo of idli, dosa, pongal & sweet.',
  },
  {
    category: 'Main Course',
    image: chickenBriyani,
    name: 'Chicken Biryani',
    price: '150',
    desc: 'Aromatic chicken biryani served with raita.',
  },
  {
    category: 'Meals',
    image: mealsWithSambar,
    name: 'Meals with Sambar',
    price: '130',
    desc: 'Steamed rice with sambar, poriyal, and pickle.',
  },
  {
    category: 'Breakfast',
    image: pongalVada,
    name: 'Pongal & Vada',
    price: '65',
    desc: 'Hot pongal with crispy vada and coconut chutney.',
  },
  {
    category: 'Main Course',
    image: parotta,
    name: 'Parotta',
    price: '80',
    desc: 'Flaky parotta served with vegetable kurma.',
  },
];

const categories = ['All', 'Breakfast', 'Meals', 'Main Course'];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMenu =
    selectedCategory === 'All'
      ? allMenu
      : allMenu.filter(item => item.category === selectedCategory);

  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-header">
          <h2>Our Menu</h2>
          <p>Check Our Delicious Menu</p>

          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-wrapper">
          <div className="menu-grid">
            {filteredMenu.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
