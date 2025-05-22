import React from 'react';
import Search from './Search';
import { products } from '@/constants';
import { useSelector } from 'react-redux';

export default function CatalogPage() {
  const query = useSelector((state) => state.search.query.toLowerCase());

  // Фильтруем продукты по query из redux
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query) ||
      product.id.toString().includes(query) ||
      (product.category && product.category.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <Search />
      <ul>
        {filteredProducts.length === 0 ? (
          <li>Ничего не найдено</li>
        ) : (
          filteredProducts.map((p) => <li key={p.id}>{p.name}</li>)
        )}
      </ul>
    </>
  );
}
