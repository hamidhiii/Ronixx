// src/components/ProductCard/ProductDataCard.jsx
import React from "react";
import "./ProductDataCard.scss";

export const ProductDataCard = ({ product }) => {
  return (
    <div id={`product-${product.id}`}>
      {product.hotSale && (
        <div >
          HOT SALE
        </div>
      )}
      <img src={product.image} alt={product.name}  />
      
      <p >{product.code}</p>

      <div className="product-details">
        <h3 className="product-title ">{product.name}</h3>
        <span className="product-specs ">
          {product.specs.map((spec, index) => (
            <li key={index}>• {spec}</li>
          ))}
        </span>
      </div>
    </div>
  );
};
