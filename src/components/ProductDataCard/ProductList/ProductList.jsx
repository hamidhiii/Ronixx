import React from "react";
import { ProductDataCard } from "./ProductDataCard";
import { productDataCard } from "../../Constants/Index";


const ProductList = () => {
  return (
    <div className="product-list">
      {productDataCard.map((product) => (
        <ProductDataCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;