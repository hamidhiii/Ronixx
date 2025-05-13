import React, { useState } from "react";
import "./ProductCard.scss";
import { FaStar } from "react-icons/fa";
import flag from '../../assets/img/638727812313966175.webp.png';
import { FaPlus, FaMinus } from "react-icons/fa";
import { productData } from "../../Constants/Index";
import ProductAccardion from "../ProductAccardion/ProductAccardion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function ProductCard() {
  const dispatch = useDispatch();

  const {
    model,
    origin,
    images,
    description,
    barcodes,
    similarModels,
    features,
    specification,
  } = productData;
  
  const [activeModel, setActiveModel] = useState(model);
  const [activeAccordion, setActiveAccordion] = useState("0");

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleBulkOrder = () => {
    console.log("Adding to cart:", {
      id: model,
      name: productData.description, // Assuming 'description' as name for now
      model,
      barcode: barcodes.card,
      price: 300000,
    });

    dispatch(
      addToCart({
        id: model,
        name: productData.description,
        model,
        barcode: barcodes.card,
        price: 300000,
      })
    );
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
          Model: <span>{model}</span> <FaStar className="star-icon" /> 
        </h4>
        <p className="product-name">{description}</p>

        <div className="barcodes">
          <p>Barcode For Card : {barcodes.card}</p>
          <p>Barcode For Color Box : {barcodes.box}</p>
          <p>Barcode For Color Carton : {barcodes.carton}</p>
        </div>

        <div className="action-buttons">
          <button className="bulk-order" onClick={handleBulkOrder}>Bulk Order</button>
        </div>

        <ProductAccardion 
          features={features} 
          description={description} 
          specification={specification} 
          activeAccordion={activeAccordion} 
          toggleAccordion={toggleAccordion} 
        />
      </div>
    </div>
  );
}
