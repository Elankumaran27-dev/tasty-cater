import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Card, Row, Col } from 'react-bootstrap';

const BookUsSection = () => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookings, setBookings] = useState([]);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [cancelIndex, setCancelIndex] = useState(null);

  useEffect(() => {
    const mobile = localStorage.getItem('userMobile');
    if (mobile) {
      const saved = JSON.parse(localStorage.getItem(`bookings_${mobile}`)) || [];
      setBookings(saved);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { name, service, date, time, status: 'Upcoming' };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);

    const mobile = localStorage.getItem('userMobile');
    if (mobile) {
      localStorage.setItem(`bookings_${mobile}`, JSON.stringify(updatedBookings));
    }

    setName('');
    setService('');
    setDate('');
    setTime('');
  };

  const calculateStatus = (dateStr, timeStr) => {
    const bookingDate = new Date(`${dateStr}T${timeStr}`);
    return bookingDate < new Date() ? 'Completed' : 'Upcoming';
  };

  const handleCancelClick = (index) => {
    setCancelIndex(index);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    const updated = bookings.filter((_, i) => i !== cancelIndex);
    setBookings(updated);

    const mobile = localStorage.getItem('userMobile');
    if (mobile) {
      localStorage.setItem(`bookings_${mobile}`, JSON.stringify(updated));
    }

    setShowCancelModal(false);
    setCancelReason('');
    setCancelIndex(null);
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return (
      <div className="text-center py-5">
        <h4>Please login to view this page.</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Book Us</h2>
      <Form onSubmit={handleSubmit} className="mb-5">
        <Row>
          <Col md={3}><Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required /></Col>
          <Col md={3}>
            <Form.Select value={service} onChange={(e) => setService(e.target.value)} required>
              <option value="">Select Service</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate</option>
              <option value="Birthday">Birthday</option>
            </Form.Select>
          </Col>
          <Col md={2}><Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required /></Col>
          <Col md={2}><Form.Control type="time" value={time} onChange={(e) => setTime(e.target.value)} required /></Col>
          <Col md={2}><Button type="submit" className="w-100">Submit</Button></Col>
        </Row>
      </Form>

      <Row>
        {bookings.map((b, index) => {
          const status = calculateStatus(b.date, b.time);
          const badgeColor = status === 'Upcoming' ? 'success' : 'secondary';

          return (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="shadow-sm animate__animated animate__fadeInUp">
                <Card.Body>
                  <Card.Title>{b.name}</Card.Title>
                  <Card.Text>
                    <strong>Service:</strong> {b.service}<br />
                    <strong>Date:</strong> {b.date}<br />
                    <strong>Time:</strong> {b.time}<br />
                    <strong>Status:</strong>{' '}
                    <span className={`badge bg-${badgeColor} px-3 py-2 rounded-pill`}>
                      {status}
                    </span>
                  </Card.Text>
                  <Button variant="danger" onClick={() => handleCancelClick(index)}>Cancel</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Reason for cancellation:</Form.Label>
            <Form.Control
              type="text"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>Close</Button>
          <Button variant="danger" onClick={confirmCancel}>Confirm Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookUsSection;
