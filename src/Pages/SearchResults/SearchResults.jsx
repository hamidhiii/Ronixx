import React from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../Constants/products";
import './SearchResults.scss'


export default function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("query")?.toLowerCase() || "";

 
 const filtered = products.filter((item) => {
  const combinedText = `
    ${item.name}
    ${item.code}
    ${item.category || ''}
    ${item.brand || ''}
    ${item.description || ''}
  `.toLowerCase();
  return combinedText.includes(searchTerm);
});



  return (
    <div className="result">
      <h2>Результаты поиска по запросу: "{searchTerm}"</h2>
      <ul>
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <li key={item.id}>
              {item.name} ({item.code})
            </li>
          ))
        ) : (
          <li>Ничего не найдено</li>
        )}
      </ul>
    </div>
  );
}
