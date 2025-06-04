import React from "react";
import "./OurTeam.css";
import chef_David from "../assets/Images/chef_David.jpg"
import chef_Maria from  "../assets/Images/chef_Maria.jpg"
import chef_John from "../assets/Images/chef_John.jpg"
import chef_Emma from "../assets/Images/chef_Emma.jpg"

const teamMembers = [
  {
    name: "Chef David",
    role: "Master Chef",
    image: chef_David,
  },
  {
    name: "Chef Maria",
    role: "Pastry Expert",
    image: chef_Maria,
  },
  {
    name: "Chef John",
    role: "BBQ Specialist",
    image: chef_John,
  },
  {
    name: "Chef Emma",
    role: "Event Planner",
    image: chef_Emma,
  },
];

const OurTeam = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Our Expert Chefs</h2>
        <p>Meet our passionate and professional catering team.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.image} alt={member.name} />
              <div className="overlay">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
