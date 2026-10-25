import React from "react";
import { Link } from "react-router-dom";

import watch1 from "../assets/images/watch1.jpg";

import "../assets/style/style.css";

function Home() {
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


      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            PREMIUM WATCH COLLECTION
          </p>

          <h1>
            TIME.
            <br />
            <span>YOUR STYLE.</span>
          </h1>

          <p className="hero-description">
            Discover modern watches designed for people
            who appreciate precision, confidence and
            timeless style.
          </p>

          <Link
            to="/products"
            className="hero-button"
          >
            EXPLORE WATCHES
          </Link>

        </div>


        <div className="hero-image">

          <img
            src={watch1}
            alt="Premium Watch"
          />

        </div>

      </section>


      {/* ABOUT */}

      <section className="about-section">

        <div className="section-heading">

          <p>
            CHRONOWORLD
          </p>

          <h2>
            TIME MADE FOR YOU
          </h2>

          <span>
            STYLE • PRECISION • PERFORMANCE
          </span>

        </div>


        <div className="about-grid">

          <div className="about-card">

            <h3>
              Premium Collection
            </h3>

            <p>
              Explore carefully selected watches
              designed with premium materials and
              modern craftsmanship.
            </p>

          </div>


          <div className="about-card">

            <h3>
              Modern Design
            </h3>

            <p>
              Discover bold designs created for
              everyday fashion, business and
              special occasions.
            </p>

          </div>


          <div className="about-card">

            <h3>
              Built To Last
            </h3>

            <p>
              Reliable timepieces combining
              durability, comfort and precision
              for everyday use.
            </p>

          </div>

        </div>

      </section>


      {/* BRANDS */}

      <section className="brand-section">

        <p>
          OUR COLLECTION
        </p>

        <h2>
          CLASSIC • MODERN • LUXURY • SPORT
        </h2>

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

export default Home;