import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png'; // adjust path as needed
import fac1 from '../assets/fac1.jpg';
import fac2 from '../assets/fac2.jpg';
import fac3 from '../assets/fac3.png';
import './Courses.css'; // optional if you split styles

function Courses() {
  return (
    <>
      {/* Header Section */}
      <section className="sub-header-course">
        <h1>Our Course</h1>
      </section>

      {/* Courses Section */}
      <section className="course">
        <h1>Courses We Provide</h1>
        <p>Ready to become a professional gamer? Start here.</p>
        <div className="row">
          <div className="course-col">
            <h3>BEGINNER</h3>
            <p>Learn the basics of gaming, setup, and strategy. Perfect for new players entering the scene.</p>
          </div>
          <div className="course-col">
            <h3>PRO</h3>
            <p>Master competitive play, streaming techniques, and build your gamer brand with confidence.</p>
          </div>
          <div className="course-col">
            <h3>Unleashed Earning</h3>
            <p>Explore monetization, sponsorships, and affiliate strategies to turn play into pay.</p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities">
        <h1>Our Facilities for Gamers</h1>
        <p>We fuel your spirit—carry it with pride and game with purpose.</p>
        <div className="row">
          <div className="facilities-col">
            <img src={fac1} alt="Video Editing" />
            <h3>Video Editing</h3>
            <p>Just record your gameplay—we’ll handle the edits and polish for your channel.</p>
          </div>
          <div className="facilities-col">
            <img src={fac2} alt="Free Games" />
            <h3>Free Best Games</h3>
            <p>We provide virus-free game links so you can chill and play without worry.</p>
          </div>
          <div className="facilities-col">
            <img src={fac3} alt="Support" height="500" />
            <h3>Support</h3>
            <p>We’re here for every gamer—confident, curious, or just getting started.</p>
          </div>
        </div>
      </section>

    </>
  );
}

export default Courses;
