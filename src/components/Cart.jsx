import React from "react";
import { Link } from "react-router-dom";

import "../assets/style/style.css";

function Cart() {

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


      {/* CART */}

      <section className="cart-section">

        <div className="section-heading">

          <p>
            CHRONOWORLD
          </p>

          <h1 className="products-title">
            YOUR CART
          </h1>

          <span>
            YOUR SELECTED WATCHES
          </span>

        </div>


        <div className="empty-cart">

          <h2>
            Your Cart Is Empty
          </h2>

          <p>
            Add your favourite watches to
            your cart and they will appear here.
          </p>

          <Link
            to="/products"
            className="hero-button"
          >
            SHOP WATCHES
          </Link>

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

export default Cart;