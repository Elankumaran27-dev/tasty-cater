import React from 'react';
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';

const Blog = () => {
  return (
    <div>
      <Hero
        title="Our Blog"
        subtitle="Get The Latest News & Updates"
      />
      {/* Other Blog page content */}
      <BlogSection />
    </div>
  );
};

export default Blog;
