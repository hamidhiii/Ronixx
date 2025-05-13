// src/components/ProductCard/ProductList.jsx
import React from "react";

import { productDataCard } from "../../Constants/Index";
import { ProductDataCard } from "./ProductDataCard";


const ProductList = () => {
  return (
    <div className="product-list flex gap-4 flex-wrap justify-center">
      {productDataCard.map((product) => (
        <ProductDataCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
