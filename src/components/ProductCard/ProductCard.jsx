import React, { useState } from "react";
import "./ProductCard.scss";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import ProductAccardion from "../ProductAccardion/ProductAccardion";
import { useTranslation } from "react-i18next";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const {
    model,
    barcode_color,
    barcode_carton,
    translations,
    price,
    specifications,
  } = product;

  const [activeAccordion, setActiveAccordion] = useState("0");

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const translation =
    translations?.[currentLang] || translations?.ru || translations?.en;

  const specs =
    specifications?.translations?.[currentLang] ||
    specifications?.translations?.ru ||
    specifications?.translations?.en;

  const name = translation?.name || "Нет названия";
  const madeIn = translation?.made_in || "Не указано";
  const featureText = translation?.features || "Нет описания";
  const descriptionText = translation?.description || "Нет описания";

  const type = specs?.type || "—";
  const size = specs?.size || "—";

  return (
    <div className="product-card">
      <div className="top-label">
        <span className="made-in">Сделано в: {madeIn}</span>
      </div>

      <div className="main-info">
        <h4>
          Модель: <span>{model}</span> <FaStar className="star-icon" />
        </h4>
        <p className="product-name">{name}</p>

        <div className="barcodes">
          <p>Штрихкод (цвет): {barcode_color}</p>
          <p>Штрихкод (коробка): {barcode_carton}</p>
        </div>
        <ProductAccardion
          features={featureText}
          description={descriptionText}
          specification={specifications}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  );
}
