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

function Products() {

  const products = [

    {
      id: 1,
      name: "Classic Black",
      price: 3999,
      image: watch1,
      description: "Elegant black watch for everyday style."
    },

    {
      id: 2,
      name: "Golden Edge",
      price: 4999,
      image: watch2,
      description: "Premium golden design with a classic finish."
    },

    {
      id: 3,
      name: "Urban Steel",
      price: 5499,
      image: watch3,
      description: "Modern stainless steel watch for daily wear."
    },

    {
      id: 4,
      name: "Sport Pro",
      price: 2999,
      image: watch4,
      description: "Sport-inspired design for an active lifestyle."
    },

    {
      id: 5,
      name: "Silver Classic",
      price: 4499,
      image: watch5,
      description: "Clean silver design with timeless styling."
    },

    {
      id: 6,
      name: "Midnight",
      price: 5999,
      image: watch6,
      description: "Bold dark watch designed for modern fashion."
    },

    {
      id: 7,
      name: "Royal Gold",
      price: 6999,
      image: watch7,
      description: "Luxury-inspired gold finish for special occasions."
    },

    {
      id: 8,
      name: "Explorer",
      price: 7499,
      image: watch8,
      description: "Durable watch built for adventure."
    },

    {
      id: 9,
      name: "Retro Digital",
      price: 2499,
      image: watch9,
      description: "Retro digital design with a modern touch."
    },

    {
      id: 10,
      name: "Executive",
      price: 8999,
      image: watch10,
      description: "Professional timepiece for business style."
    },

    {
      id: 11,
      name: "Ocean Blue",
      price: 6499,
      image: watch11,
      description: "Blue dial design inspired by the ocean."
    },

    {
      id: 12,
      name: "Luxury Black",
      price: 9999,
      image: watch12,
      description: "Premium black timepiece with luxury styling."
    }

  ];


  const addToCart = (product) => {

    alert(product.name + " added to cart!");

    console.log(
      "Added to cart:",
      product
    );

  };


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


      {/* PRODUCTS */}

      <section className="products-section">

        <div className="section-heading">
            <p>THE CHRONO EDIT</p>
            <h1>12 TIMEPIECES. ONE SIGNATURE.</h1>
            <span>Discover watches selected for style, precision and character.</span>
        </div>


        <div className="product-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-number">
                {product.id}
              </div>

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-content">

                <p className="product-brand">
                  CHRONOWORLD
                </p>

                <h3>
                  {product.name}
                </h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-bottom">

                  <h4>
                    ₹{product.price.toLocaleString("en-IN")}
                  </h4>

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    ADD TO CART
                  </button>

                </div>

              </div>

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

export default Products;