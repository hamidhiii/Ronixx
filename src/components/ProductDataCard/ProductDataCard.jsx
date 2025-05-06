// ProductDataCard.jsx
import React from "react";
import "./ProductDataCard.scss";
import { Link } from "react-router";

export const ProductDataCard = ({ product }) => {
  if (!product) return null;

  return (
    <Link to={'/product-details'}>
    <div className="product-card" id={`product-${product.id}`}>
      {product.hotSale && (
        <div className="hot-sale-label">HOT SALE</div>
      )}
      <img src={product.image} alt={product.name} className="product-image" />
      <p className="product-code">{product.code}</p>

      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>
        <ul className="product-specs">
          {(Array.isArray(product.specs) ? product.specs : []).map((spec, index) => (
            <li key={index}>• {spec}</li>
          ))}
        </ul>
      </div>
    </div>
    </Link>
  );
};
