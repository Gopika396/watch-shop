import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Gallery from "./components/Gallery.jsx";
import Cart from "./components/Cart.jsx";

import "./assets/style/style.css";

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>
    </HashRouter>
  );
}

export default App;