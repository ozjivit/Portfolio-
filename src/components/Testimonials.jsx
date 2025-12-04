import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h1>Testimonials</h1>
        <p>Starting ke liye — initial client feedback.</p>
      </div>

      <div className="testimonials-list">
        <div className="testimonial-card">
          <p className="quote">"Zain delivered exactly what I wanted — modern design and fast website."</p>
          <p className="author">— Client</p>
        </div>
        <div className="testimonial-card">
          <p className="quote">"Great communication, timely delivery, and professional work!"</p>
          <p className="author">— Client</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

