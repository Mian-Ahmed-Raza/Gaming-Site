import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png';
import aboutImg from '../assets/about.jpg';
import './About.css'; // your custom styles

function About() {
  return (
    <>
      {/* Header Section */}
      <section className="sub-header">
        <h1>About Us</h1>
      </section>

      {/* About Us Content */}
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We Are the World's Largest Gaming Community</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum corporis praesentium, iste quisquam voluptas saepe minus mollitia culpa tempora?
            </p>
            <Link to="/courses" className="hero-btn red-btn">Explore Now</Link>
          </div>
          <div className="about-col">
            <img src={aboutImg} alt="About Us" />
          </div>
        </div>
      </section>

    </>
  );
}

export default About;
