import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png';
import blah1 from '../assets/blah1.jpg';
import './Blog.css'; // your custom styles

function Blog() {
  return (
    <>
      {/* Header Section */}
      <section className="sub-header-blog">
        <h1>Our Blogs</h1>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <img src={blah1} alt="Gamer wins RTX" />
            <h2>Gamer Wins AORUS RTX 980 from Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque eius rem sapiente a nostrum laborum fugiat consequatur similique...
            </p>
            <p>
              Quos odit provident eius labore amet laboriosam perspiciatis quae nulla dolore velit voluptates dignissimos explicabo voluptate natus...
            </p>

            {/* Comment Box */}
            <div className="comment-box">
              <h3>Leave a Comment, Gami</h3>
              <form className="comment-form">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <textarea rows="5" placeholder="Enter your comment"></textarea>
                <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="blog-right">
            <h3>Gamer Categories</h3>
            <div><span>Playing Games</span><span>99%</span></div>
            <div><span>Shooting Reflexes</span><span>60%</span></div>
            <div><span>Fast Rendering</span><span>81%</span></div>
            <div><span>Quick Earning</span><span>87.5%</span></div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Blog;
