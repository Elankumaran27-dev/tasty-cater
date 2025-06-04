// src/components/AboutStatsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './AboutCounterSection.css';

const AboutCounterSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const stats = [
    { label: 'Years Experience', value: 10 },
    { label: 'Skilled Professionals', value: 50 },
    { label: 'Happy Clients', value: 1000 },
    { label: 'Projects Completed', value: 750 },
  ];

  return (
    <section className="about-stats-section" ref={sectionRef}>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div className="col-6" key={index}>
                  <div className="bg-white rounded p-4 shadow text-center">
                    <h1 className="text-primary mb-0">
                      {visible ? (
                        <Counter target={stat.value} />
                      ) : (
                        0
                      )}
                      +
                    </h1>
                    <p className="mb-0">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/3RN4hPbiLHA"
                title="Catering Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);
    return () => clearInterval(interval);
  }, [target]);
  return count;
};

export default AboutCounterSection;
