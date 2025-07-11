import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ProductDataCard.scss";

export const ProductDataCard = ({ product }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleClick = (productName) => {
    navigate(`/product/details/${encodeURIComponent(product.translations.en.name)}`)

  };

  const translation =
    product.translations?.[currentLang] ||
    product.translations?.ru ||
    product.translations?.en;

  const name = translation?.name || "Нет названия";
  const madeIn = translation?.made_in || "Не указано";
  const price = product.price ? `${product.price} сум` : "Цена не указана";

  // ❗ Логируем данные
  console.log("Product:", product);
  console.log("Текущий язык:", currentLang);
  console.log("Перевод:", translation);

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

        <p className="product-code">Модель: {product.model}</p>

        <div className="product-details">
          <h3 className="product-title">{name}</h3>
          <p className="product-price">Цена: {price}</p>
          <p className="product-made-in">Сделано в: {madeIn}</p>
        </div>
      </div>
    </div>
  );
};
