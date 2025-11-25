import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png';
import comu1 from '../assets/comu1.jpg';
import comu2 from '../assets/comu2.jpg';
import comu3 from '../assets/comu3.jpg';
import fac1 from '../assets/fac1.jpg';
import fac2 from '../assets/fac2.jpg';
import fac3 from '../assets/fac3.png';
import us1 from '../assets/us1.jpg';
import us2 from '../assets/us2.jpg';
import './Home.css'; // your custom styles

function Home() {
  return (
    <>
      {/* Header Section */}
      <section className="header">
        <div className="text-box">
          <h1>MIAN AHMED GAMING</h1>
          <p>
            Gaming is now a full-blown industry where newbies are making their mark just by playing. <br />
            You can be a gamer too—earn, grow, and dominate.
          </p>
          <Link to="/about" className="hero-btn">Visit Us To Know More</Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="course">
        <h1>Courses We Provide</h1>
        <p>Become a professional gamer—start here.</p>
        <div className="row">
          <div className="course-col">
            <h3>BEGINNER</h3>
            <p>Learn the basics, build your setup, and start your journey into gaming.</p>
          </div>
          <div className="course-col">
            <h3>PRO</h3>
            <p>Master competitive play, streaming, and branding to level up your career.</p>
          </div>
          <div className="course-col">
            <h3>Unleashed Earning</h3>
            <p>Explore monetization, sponsorships, and affiliate strategies to turn play into pay.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="campus">
        <h1>Global Gaming Community</h1>
        <p>
          Download your first game, upload your content, and become a global, appreciated gamer—with our support.
        </p>
        <div className="row">
          <div className="campus-col">
            <img src={comu3} alt="Gaming" height="650" />
            <div className="layer"><h3>GAMING</h3></div>
          </div>
          <div className="campus-col">
            <img src={comu1} alt="Playing" height="650" />
            <div className="layer"><h3>PLAYING</h3></div>
          </div>
          <div className="campus-col">
            <img src={comu2} alt="Earning" height="650" />
            <div className="layer"><h3>EARNING</h3></div>
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
            <h3>Making Video Edit</h3>
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

      {/* Testimonials Section */}
      <section className="testimonials">
        <h1>What Our Users Say</h1>
        <p>We empower your spirit—carry it with pride.</p>
        <div className="row">
          <div className="testimonial-col">
            <img src={us2} alt="User 1" />
            <div>
              <p>“This platform changed my gaming journey. I’m now streaming full-time!”</p>
              <h3>David Coppr</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={us1} alt="User 2" />
            <div>
              <p>“From zero to gamer—this site gave me the tools and confidence I needed.”</p>
              <h3>Cody Huhege</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h1>Enroll in various online gaming courses <br /> From anywhere in the world</h1>
        <Link to="/contact" className="hero-btn">Contact Us</Link>
      </section>

    </>
  );
}

export default Home;
