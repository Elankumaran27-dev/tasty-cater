// src/components/LoginModal.jsx
import React, { useState, useEffect, useRef } from 'react';

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const LoginModal = ({ show, onClose, onLogin }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const inputRefs = useRef([]);

  const sendOtp = () => {
    const newOtp = generateOTP();
    alert(`Your OTP is: ${newOtp}`);
    setGeneratedOtp(newOtp);
    setOtp('');
    setTimeLeft(15);
    setOtpSent(true);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = otp.split('');
      newOtp[index] = value;
      setOtp(newOtp.join(''));
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleLogin = () => {
    if (otp === generatedOtp && timeLeft > 0) {
      localStorage.setItem('isLoggedIn', 'true');
      onLogin();
    } else {
      alert('Invalid OTP or time expired!');
      onClose();
    }
  };

  return (
    show && (
      <div style={modalStyle}>
        <div style={modalBox}>
          <h4 style={{ marginBottom: '15px' }}>🔒 Login to Book</h4>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={inputStyle}
          />
          <button onClick={sendOtp} style={buttonStyle}>Send OTP</button>

          {otpSent && (
            <>
              <div style={otpContainerStyle}>
                {Array(6).fill().map((_, i) => (
                  <input
                    key={i}
                    ref={(el) => inputRefs.current[i] = el}
                    maxLength="1"
                    style={otpInputStyle}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                  />
                ))}
              </div>
              <div style={{ marginTop: '10px', fontSize: '14px' }}>
                ⏳ Time left: {timeLeft}s
              </div>
              {timeLeft === 0 && (
                <button onClick={sendOtp} style={resendStyle}>Resend OTP</button>
              )}
              <button onClick={handleLogin} style={loginBtn}>Login</button>
            </>
          )}
          <button onClick={onClose} style={closeBtn}>✖</button>
        </div>
      </div>
    )
  );
};

const modalStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 999,
};

const modalBox = {
  backgroundColor: '#fff',
  padding: '30px 25px',
  borderRadius: '10px',
  width: '90%',
  maxWidth: '400px',
  position: 'relative',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
};

const inputStyle = {
  padding: '10px',
  width: '100%',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '8px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '15px',
};

const otpContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '10px',
};

const otpInputStyle = {
  width: '35px',
  height: '35px',
  fontSize: '18px',
  textAlign: 'center',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const resendStyle = {
  marginTop: '10px',
  backgroundColor: '#ffc107',
  color: '#000',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const loginBtn = {
  marginTop: '10px',
  padding: '8px 16px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const closeBtn = {
  position: 'absolute',
  top: '8px',
  right: '12px',
  background: 'transparent',
  border: 'none',
  fontSize: '18px',
  color: '#888',
  cursor: 'pointer',
};

export default LoginModal;
