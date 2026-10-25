import React from "react";
import { Link } from "react-router-dom";

import watch1 from "../assets/images/watch1.jpg";
import watch2 from "../assets/images/watch2.jpg";
import watch3 from "../assets/images/watch3.jpg";
import watch4 from "../assets/images/watch4.jpg";
import watch5 from "../assets/images/watch5.jpg";
import watch6 from "../assets/images/watch6.jpg";
import watch7 from "../assets/images/watch7.jpg";
import watch8 from "../assets/images/watch8.jpg";
import watch9 from "../assets/images/watch9.jpg";
import watch10 from "../assets/images/watch10.jpg";
import watch11 from "../assets/images/watch11.jpg";
import watch12 from "../assets/images/watch12.jpg";

import "../assets/style/style.css";

function Gallery() {

  const images = [
    watch1,
    watch2,
    watch3,
    watch4,
    watch5,
    watch6,
    watch7,
    watch8,
    watch9,
    watch10,
    watch11,
    watch12
  ];

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="nav-container">

          <Link to="/" className="brand">
            Chrono<span>World</span>
          </Link>

          <div className="nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/products">
              Products
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

            <Link to="/cart">
              Cart
            </Link>

          </div>

        </div>

      </nav>


      {/* GALLERY */}

      <section className="products-section">

        <div className="section-heading">

          <p>
            CHRONOWORLD GALLERY
          </p>

          <h1 className="products-title">
            WATCH GALLERY
          </h1>

          <span>
            EXPLORE OUR COLLECTION
          </span>

        </div>


        <div className="gallery-grid">

          {images.map((image, index) => (

            <div
              className="gallery-card"
              key={index}
            >

              <img
                src={image}
                alt={"Watch " + (index + 1)}
              />

            </div>

          ))}

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-container">

          <div className="footer-column">

            <h2>
              Chrono<span>World</span>
            </h2>

            <p>
              Premium watches combining modern
              design and timeless style.
            </p>

            <p>
              Discover timepieces created for
              every moment and every personality.
            </p>

          </div>


          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <div className="footer-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/products">
                Products
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

              <Link to="/cart">
                Cart
              </Link>

            </div>

          </div>


          <div className="footer-column footer-contact">

            <h3>
              Contact
            </h3>

            <p>
              Bengaluru, India
            </p>

            <p>
              +91 1111 1111
            </p>

            <p>
              support@chronoworld.com
            </p>

            <h3 className="footer-follow">
              Follow Us
            </h3>

            <div className="footer-social">

              <a href="#">
                Facebook
              </a>

              <a href="#">
                X
              </a>

              <a href="#">
                Instagram
              </a>

              <a href="#">
                LinkedIn
              </a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            &copy; 2026 ChronoWorld. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>

  );
}

export default Gallery;