import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ mainCategories, products }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
      <div className="Menu">
        {mainCategories.map(category => {
          const subcategories = Array.from(new Set(
              products
                  .filter(product => product.main_category === category)
                  .map(product => product.sub_category)
          ));

          return (
              <div key={category} className="category-wrapper" onMouseEnter={() => handleMouseEnter(category)} onMouseLeave={handleMouseLeave} style={{ flex: 1 }}>
                <h3>{category}</h3>
                {hoveredCategory === category && (
                    <div className="subcategories">
                      {subcategories.map(subcategory => (
                          <Link key={subcategory} to={`/products/${subcategory}`}>
                            <p>{subcategory}</p>
                          </Link>
                      ))}
                    </div>
                )}
              </div>
          );
        })}
      </div>
  );
};

export default Menu;
