import React from "react";
import { ProductDataCard } from "./ProductDataCard";
import { productDataCard } from "../../Constants/Index";


const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => {
  const lang = i18n.language;
  const spec = product?.specifications?.translations?.[lang] || product?.specifications?.translations?.ru || {};

  return (
    <ProductDataCard
      product={product}
      type={spec.type}
      size={spec.size}
    />
  );
})}
    </div>
  );
};

export default ProductList;