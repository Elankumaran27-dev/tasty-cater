// src/components/TestimonialsSection.jsx
import React, { useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Anand Kumar',
    profession: 'Wedding Client',
    review: 'Their food quality and presentation was top-notch. Every guest praised it!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
    delay: '0.1s',
    animation: 'fadeInRight',
  },
  {
    name: 'Revathi',
    profession: 'Birthday Catering',
    review: 'பிறந்த நாளுக்கான செட்டிங் நன்றாக இருந்தது. Kids ellarukum romba pidichiruchu!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 4,
    delay: '0.3s',
    animation: 'fadeInRight',
  },
  {
    name: 'Suresh M',
    profession: 'Corporate Event',
    review: 'Very professional service. Timing and taste were both perfect.',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    stars: 5,
    delay: '0.5s',
    animation: 'fadeInRight',
  },
  {
    name: 'Divya Shree',
    profession: 'Wedding Guest',
    review: 'நானும் என் family-யும் ரொம்ப impress ஆனோம். Super hospitality.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 4,
    delay: '0.1s',
    animation: 'fadeInLeft',
  },
  {
    name: 'Manoj Kumar',
    profession: 'Engagement Catering',
    review: 'Beautifully organized and the food was delicious. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    stars: 5,
    delay: '0.3s',
    animation: 'fadeInLeft',
  },
  {
    name: 'Lakshmi R',
    profession: 'Housewarming Event',
    review: 'Taste, service, decoration – everything was on point. Thank you team!',
    image: 'https://randomuser.me/api/portraits/women/85.jpg',
    stars: 5,
    delay: '0.5s',
    animation: 'fadeInLeft',
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    const WOW = require('wowjs'); // Use require here
    new WOW.WOW().init();         // Initialize WOW
  }, []);

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <small className="d-inline-block fw-bold text-primary text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            Testimonials
          </small>
          <h1 className="display-5 mb-4">What Our Clients Say</h1>
        </div>

        {/* First Row */}
        <div className="row g-4 mb-4">
          {testimonials.slice(0, 3).map((item, index) => (
            <div
              className={`col-lg-4 col-md-6 wow ${item.animation}`}
              data-wow-delay={item.delay}
              key={index}
            >
              <div className="testimonial-card p-4 rounded">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img rounded-circle me-3"
                  />
                  <div>
                    <h5 className="mb-0">{item.name}</h5>
                    <small className="text-muted">{item.profession}</small>
                  </div>
                </div>
                <p className="mb-3">{item.review}</p>
                <div className="stars text-warning">
                  {'★'.repeat(item.stars) + '☆'.repeat(5 - item.stars)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="row g-4">
          {testimonials.slice(3, 6).map((item, index) => (
            <div
              className={`col-lg-4 col-md-6 wow ${item.animation}`}
              data-wow-delay={item.delay}
              key={index + 3}
            >
              <div className="testimonial-card p-4 rounded">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img rounded-circle me-3"
                  />
                  <div>
                    <h5 className="mb-0">{item.name}</h5>
                    <small className="text-muted">{item.profession}</small>
                  </div>
                </div>
                <p className="mb-3">{item.review}</p>
                <div className="stars text-warning">
                  {'★'.repeat(item.stars) + '☆'.repeat(5 - item.stars)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
