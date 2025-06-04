// src/components/Toast.jsx
import React from 'react';

const Toast = ({ message }) => {
  return (
    <div style={toastStyle}>
      {message}
    </div>
  );
};

const toastStyle = {
  position: 'fixed',
  top: '20px',
  right: '20px',
  backgroundColor: '#4BB543',
  color: 'white',
  padding: '12px 20px',
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
  zIndex: 9999,
};

export default Toast;
