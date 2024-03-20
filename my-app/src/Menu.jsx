import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './Menu.css'

const Menu = ({ mainCategories, products }) => {
  return (
    <div className="Menu">
      {mainCategories.map(category => (
        <Link key={category} to={`/products/${category}`}>
          <button>{category}</button>
        </Link>
      ))}
      {/* Remove the Routes component from here */}
    </div>
  );
};

export default Menu;
