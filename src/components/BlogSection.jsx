import React from "react";
import "./BlogSection.css";

const blogData = [
  {
    image: "https://themewagon.github.io/CaterServ/img/blog-1.jpg",
    date: "01 Jan",
    title: "How To Organize A Perfect Event",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam.",
  },
  {
    image: "https://themewagon.github.io/CaterServ/img/blog-2.jpg",
    date: "02 Feb",
    title: "Tips For Hosting Family Dinners",
    description:
      "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem.",
  },
  {
    image: "https://themewagon.github.io/CaterServ/img/blog-3.jpg",
    date: "03 Mar",
    title: "Catering Trends In 2025",
    description:
      "Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
];

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-title">
          <h5>Our Blog</h5>
          <h2>Latest From Our Blog</h2>
        </div>
        <div className="blog-cards">
          {blogData.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-img">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date">{blog.date}</div>
              </div>
              <div className="blog-content">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
