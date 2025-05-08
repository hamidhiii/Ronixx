import React from "react";
import "../ProductDataCard/ProductDataCard.scss";
import { productDataCard } from "../../Constants/Index";

 export const ProductDataCard = ({ product }) => {
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
      {productDataCard.map((product) => (
        <ProductDataCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
