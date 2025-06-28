import React from "react";
import "./ProductDataCard.scss";
import { useNavigate } from "react-router-dom";

export const ProductDataCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/details/${encodeURIComponent(product.translations.en.name)}`);

  };

  return (
    <div className="product-cards" id={`product-${product.id}`} onClick={handleClick}>
      <img src={`https://ronixtools.duckdns.org${product.image}`} alt={product.translations?.en?.name} className="product-image" />
      
      <p className="product-code">{product.model}</p>

      <div className="product-details">
        <h3 className="product-title">{product.translations?.en?.name}</h3>
        <span className="product-specs">
          Цена: {product.price}$
        </span>
      </div>
    </div>
  );
};
