// src/components/BookingForm/BookingForm.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('🎉 Booking Successful!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    });
    onClose();
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 z-3">
      <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '500px', width: '100%', animation: 'fadeInUp 0.4s ease' }}>
        <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={onClose}></button>
        <h4 className="text-center mb-4">Book Your Appointment</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control rounded-pill"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="date"
              className="form-control rounded-pill"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="time"
              name="time"
              className="form-control rounded-pill"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="guests"
              className="form-control rounded-pill"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              rows="3"
              className="form-control"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
