import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { subcategory } = useParams();

  useEffect(() => {
    document.title = `Products - ${subcategory}`;
  }, [subcategory]);

  return (
    <div>
      <h1>Product Page</h1>
      <p>Subcategory: {subcategory}</p>
      {/* Additional content */}
    </div>
  );
};

export default ProductPage;
