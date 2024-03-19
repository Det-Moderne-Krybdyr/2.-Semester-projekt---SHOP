import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Menu from "./Menu";
import Body from "./Body";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Products.json"); // Fetching from public directory
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <Body />
      <Footer />
    </>
  );
}

export default App;
