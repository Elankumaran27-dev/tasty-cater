// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [userMobile, setUserMobile] = useState(localStorage.getItem('userMobile') || '');

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('userMobile', userMobile);
  }, [isLoggedIn, userMobile]);

  const login = (mobile) => {
    setIsLoggedIn(true);
    setUserMobile(mobile);
  };

  const logout = () => {
    localStorage.removeItem(`bookings_${userMobile}`);
    setIsLoggedIn(false);
    setUserMobile('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userMobile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
