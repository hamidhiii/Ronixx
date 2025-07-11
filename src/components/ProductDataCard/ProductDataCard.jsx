import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDataCard.scss";
import { useTranslation } from "react-i18next";

export const ProductDataCard = ({ product }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const handleClick = (productName) => {
    navigate(`/product/details/${encodeURIComponent(productName)}`);
  };

  // Получаем перевод характеристик только из ru и uz
  const spec =
    product?.specifications?.translations?.[lang] ||
    product?.specifications?.translations?.ru || {};

  const name =
    product?.translations?.[lang]?.name ||
    product?.translations?.ru?.name ||
    "Нет названия";

  return (
    <div className="product-list">
      <div
        className="product-card"
        id={`product-${product.id}`}
        onClick={() => handleClick(name)}
      >
        <img
          src={`https://ronixtools.duckdns.org${product.image}`}
          alt={name}
          className="product-image"
        />

        <p className="product-code">{product.model}</p>

        <div className="product-details">
          <h3 className="product-title">{name}</h3>

          <div className="product-specs-row">
            <span className="spec-item">Тип: {spec.type || "—"}</span>
          </div>
          <div className="product-specs-row">
            <span className="spec-item">Размер: {spec.size || "—"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
