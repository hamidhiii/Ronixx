import React, { useState } from "react";
import "./ProductCard.scss";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import ProductAccardion from "../ProductAccardion/ProductAccardion";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const {
    model,
    barcode_color,
    barcode_carton,
    translations,
    price,
    specifications,
    features
  } = product;

  const [activeAccordion, setActiveAccordion] = useState("0");

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  // const handleBulkOrder = () => {
  //   dispatch(
  //     addToCart({
  //       id: product.id,
  //       name: translations?.en?.name,
  //       model,
  //       barcode: barcode_color,
  //       price,
  //     })
  //   );
  // };

  return (
    <div className="product-card">
      <div className="top-label">
        <span className="made-in">Made in {translations?.en?.made_in}</span>
      </div>

      <div className="main-info">
        <h4>
          Model: <span>{model}</span> <FaStar className="star-icon" />
        </h4>
        <p className="product-name">{translations?.en?.description}</p>

        <div className="barcodes">
          <p>Barcode For Color: {barcode_color}</p>
          <p>Barcode For Carton: {barcode_carton}</p>
        </div>

        {/* <div className="action-buttons">
          <button className="bulk-order" onClick={handleBulkOrder}>Bulk Order</button>
        </div> */}

        <ProductAccardion
          features={features}
          description={translations?.en?.description}
          specification={specifications}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  );
}
