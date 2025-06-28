import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsBySubcategoryQuery } from "../../services/api/productsApi";
import { ProductDataCard } from "../../components/ProductDataCard/ProductDataCard";

const ProductsBySubcategory = () => {
  const { path } = useParams();

  const { data: products = [], isLoading, isError, error } = useGetProductsBySubcategoryQuery(path);

  if (isLoading) return <div>Загрузка продуктов...</div>;
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
