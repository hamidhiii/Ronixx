<<<<<<< HEAD
import React, { useState } from "react";
import "./ProductCard.scss";
import { FaStar } from "react-icons/fa";
import flag from '../../assets/img/638727812313966175.webp.png'
import { FaPlus, FaMinus } from "react-icons/fa";
import { productData } from "../../Constants/Index";
import ProductAccardion from "../ProductAccardion/ProductAccardion";

export default function ProductCard() {
  const {
    name,
    model,
    rating,
    barcodes,
    similarModels,
    features,
    description,
    specification,
  } = productData;

  const [activeModel, setActiveModel] = useState(model);
  const [activeAccordion, setActiveAccordion] = useState("0");

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div className="product-card">
      <div className="top-label">
        <span className="made-in">MADE IN GERMANY 🇩🇪</span>
      </div>

      <div className="similar-models">
        <p>similar model</p>
        <div className="model-buttons">
          {similarModels.map((item, index) => (
            <button
              key={index}
              className={item === activeModel ? "active" : ""}
              onClick={() => setActiveModel(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="main-info">
        <h4>
          Model: <span>{model}</span> <FaStar className="star-icon" /> (NA)
        </h4>
        <p className="product-name">{name}</p>

        <div className="barcodes">
          <p>Barcode For Card : {barcodes.card}</p>
          <p>Barcode For Color Box : {barcodes.box}</p>
          <p>Barcode For Color Carton : {barcodes.carton}</p>
        </div>

        <div className="action-buttons">
          <button className="bulk-order">Bulk Order</button>
        </div>



        <ProductAccardion features={features} description={description} specification={specification} activeAccordion={activeAccordion} toggleAccordion={toggleAccordion}
        />

      </div>
    </div>
  );
}
=======
import React from "react";
import productData from "../../Constants/Index"; 
import "../ProductCard/ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card relative w-64 p-4 shadow-lg border rounded-md bg-white" id={`product-${product.id}`}>
      {product.hotSale && (
        <div className="hot-sale-label absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">
          HOT SALE
        </div>
      )}
      <img src={product.image} alt={product.name} className="product-image w-full h-40 object-contain" />
     
      <p className="product-code text-xs text-gray-500 mt-2">{product.code}</p>

      <div className="product-details">
        <h3 className="product-title text-sm font-semibold">{product.name}</h3>
        <span className="product-specs text-xs text-gray-600">
          {product.specs.map((spec, index) => (
            <li key={index}>• {spec}</li>
          ))}
        </span>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list flex gap-4 flex-wrap justify-center">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
>>>>>>> 21f9046 (farruxs codes)
