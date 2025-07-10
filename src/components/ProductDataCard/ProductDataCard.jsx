import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDataCard.scss";

export const ProductDataCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (productName) => {
    navigate(`/product/details/${encodeURIComponent(productName)}`);
  };

  return (
    <div className="product-list">
      <div
        className="product-card"
        id={`product-${product.id}`}
        onClick={() => handleClick(product.translations.en.name)}
      >
        <img
          src={`https://ronixtools.duckdns.org${product.image}`}
          alt={product.translations?.en?.name}
          className="product-image"
        />

        <p className="product-code">{product.model}</p>

        <div className="product-details">
          <h3 className="product-title">{product.translations?.en?.name}</h3>
          <div className="product-specs-row">
            <span className="spec-item">Battery Chemistry: Lithium</span>
          </div>
          <div className="product-specs-row">
            <span className="spec-item">Battery Voltage: 3.6V</span>
          </div>
        </div>
      </div>
    </div>
  );
};
