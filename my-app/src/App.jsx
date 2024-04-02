import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Body from "./Body";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Products.json"); // Fetching from public directory
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products data: ", error);
      }
    };
    fetchData();
  }, []);

  // Extracting unique main categories from products
  const mainCategories = [...new Set(products.map(product => product.main_category))];

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Menu mainCategories={mainCategories} products={products} />} />
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
