import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png';
import './Contact.css'; // your custom styles

function Contact() {
  return (
    <>
      {/* Header Section */}
      <section className="sub-header-contact">
        <h1>Contact Us</h1>
      </section>

      {/* Location Map */}
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108837.38329352296!2d74.3243776!3d31.519539199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919053f47772a6d%3A0x47a8ebb8f359eb8!2sPeak%20Solutions%20College!5e0!3m2!1sen!2s!4v1663954081924!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peak Solutions Map"
        ></iframe>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa-solid fa-house fa1"></i>
              <span>
                <h5>Saddar Lahore Cantt, Zarrar Shaheed Road, Peak Solutions</h5>
                <p>Lahore, Pakistan</p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-phone fa1"></i>
              <span>
                <h5>+92 333 4477110</h5>
                <p>Available daily for gamers: 12AM to 12PM</p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-envelope fa1"></i>
              <span>
                <h5>xyz.2078@gmail.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>

          <div className="contact-col">
            <form>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your subject" />
              <textarea rows="8" placeholder="Message"></textarea>
              <button type="submit" className="hero-btn red-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}

export default Contact;
