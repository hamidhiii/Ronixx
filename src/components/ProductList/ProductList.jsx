// ProductList.jsx
import React from "react";
import { ProductDataCard } from "../ProductDataCard/ProductDataCard";


export const ProductList = ({ productDataCard }) => {
  if (!Array.isArray(productDataCard)) {
    console.error("productDataCard не массив:", productDataCard);
    return <p>Нет данных для отображения</p>;
  }

  return (
    <div className="product-list">
      {productDataCard.map((product) => (
        <ProductDataCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
