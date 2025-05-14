// src/components/ProductCard/ProductDataCard.jsx
import React from "react";
import "./ProductDataCard.scss";
import { useNavigate } from "react-router-dom";

export const ProductDataCard = ({ product }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/product-details')
  }
  return (
    <div className="product-card" id={`product-${product.id}`} onClick={handleClick}>
      {product.hotSale && (
        <div className="hot-sale-label ">
          HOT SALE
        </div>
      )}
      <img src={product.image} alt={product.name} className="product-image " />
      
      <p className="product-code ">{product.code}</p>

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
