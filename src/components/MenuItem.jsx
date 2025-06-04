// src/components/MenuItem.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

const MenuItem = ({ image, name, price, desc }) => {
  return (
    <motion.div
      className="menu-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={name} />
      <div className="menu-content">
        <div className="menu-title">
          <h4>{name}</h4>
          <span>₹{price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
