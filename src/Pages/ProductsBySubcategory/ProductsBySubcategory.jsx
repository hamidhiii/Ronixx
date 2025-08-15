import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsBySubcategoryQuery } from "../../services/api/productsApi";
import { ProductDataCard } from "../../components/ProductDataCard/ProductDataCard";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import './ProductsBySubcategory.scss'; // Assuming you have a CSS file for styles

const ProductsBySubcategory = () => {
  const { path } = useParams();
  const { data, isLoading, isError, error } = useGetProductsBySubcategoryQuery(path);
  const products = data?.results || [];

  if (isLoading) {
    return (
      <div className="product-list">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="skeleton-card" style={{ width: '264px', margin: '10px' }}>
            <Skeleton height={180} />
            <Skeleton height={20} style={{ marginTop: '10px' }} />
            <Skeleton height={15} count={2} style={{ marginTop: '5px' }} />
          </div>
        ))}
      </div>
    );
  }

  if (isError) return <div>Ошибка: {error?.data?.message || "Неизвестная ошибка"}</div>;
  if (!products.length) return <div>Нет продуктов</div>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductDataCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsBySubcategory;
