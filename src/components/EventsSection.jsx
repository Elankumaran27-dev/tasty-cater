import React, { useEffect } from 'react';
import './Events.css';
import birthday from '../assets/Images/birthday.jpg';
import wedding from '../assets/Images/marriage.jpg';
import corporate from '../assets/Images/corporate.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const EventsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const events = [
    {
      title: 'Wedding Ceremony',
      description: 'Join us for a grand wedding celebration with exquisite catering services.',
      image: wedding,
      delay: '100',
    },
    {
      title: 'Corporate Meeting',
      description: 'Professional catering for your corporate events and meetings.',
      image: corporate,
      delay: '300',
    },
    {
      title: 'Birthday Party',
      description: 'Celebrate birthdays with our delightful catering options.',
      image: birthday,
      delay: '500',
    },
  ];

  return (
    <section className="events-section py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: '600px' }}
        >
          <small className="d-inline-block fw-bold text-primary text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            Our Events
          </small>
          <h1 className="display-5 mb-4">Upcoming Events</h1>
        </div>
        <div className="row g-4">
          {events.map((event, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={event.delay}
              key={index}
            >
              <div className="h-100 d-flex flex-column event-card">
                <div className="position-relative">
                  <img className="img-fluid event-image" src={event.image} alt={event.title} />
                  <div className="event-overlay d-flex align-items-center justify-content-center">
                    <div className="text-white text-center p-4">
                      <h4 className="mb-3">{event.title}</h4>
                      <p className="mb-3">{event.description}</p>
                      <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
