import React from 'react';
import Hero from '../components/Hero';

const NotFound = () => {
  return (
    <div>
      <Hero
        title="404 Error"
        subtitle="Oops! Page Not Found"
      />
      {/* You can add a back-to-home button or error message here */}
      <div className="text-center py-5">
        <h2 className="mb-3">We couldn’t find the page you’re looking for.</h2>
        <p className="mb-4">Please check the URL or go back to the home page.</p>
        <a href="/" className="btn btn-primary rounded-pill px-4 py-2">Back to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
