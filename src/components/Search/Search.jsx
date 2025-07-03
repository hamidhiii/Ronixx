import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import debounce from "lodash.debounce";

import { useGetAllProductsQuery } from "../../services/api/productsApi";
import "./Search.scss";

export default function Search() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: products = [], isLoading } = useGetAllProductsQuery();

  // Сброс при переходе на страницу поиска
  useEffect(() => {
    if (location.pathname === "/search") {
      setQuery("");
      setFilteredProducts([]);
      setActiveIndex(-1);
    }
  }, [location.pathname]);

  // Поисковая логика с debounce
  const handleSearch = useCallback(
    debounce((searchValue) => {
      if (searchValue.length === 0) {
        setFilteredProducts([]);
        return;
      }

      const searchTerm = searchValue.toLowerCase().trim();
      const filtered = products.filter((item) => {
        const combinedText = `
          ${item.translations?.en?.name || ""}
          ${item.model || ""}
          ${item.category || ""}
          ${item.brand || ""}
          ${item.description || ""}
        `.toLowerCase();

        return combinedText.includes(searchTerm);
      });

      setFilteredProducts(filtered.slice(0, 5));
    }, 300),
    [products]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && filteredProducts[activeIndex]) {
        const selected = filteredProducts[activeIndex];
        navigate(`/product/details/${encodeURIComponent(selected.translations.en.name)}`);
      } else if (query.trim()) {
        navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
      }
      setQuery("");
      setFilteredProducts([]);
      setActiveIndex(-1);
    }
  };

  const handleSuggestionClick = (productName) => {
    navigate(`/product/details/${encodeURIComponent(productName)}`);
    setQuery("");
    setFilteredProducts([]);
    setActiveIndex(-1);
  };

  return (
    <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="search-wrapper">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Поиск инструмента..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-autocomplete="list"
          aria-activedescendant={activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined}
          role="combobox"
        />

        {/* Skeleton Loader */}
        {isLoading && (
          <div className="skeleton-wrapper">
            <Skeleton height={40} count={3} baseColor="#f0f0f0" highlightColor="#e0e0e0" />
          </div>
        )}

        {/* Suggestions List */}
        {filteredProducts.length > 0 && !isLoading && (
          <ul className="suggestions show" role="listbox">
            {filteredProducts.map((item, index) => (
              <li
                id={`suggestion-${index}`}
                key={item.id}
                className={index === activeIndex ? "active" : ""}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSuggestionClick(item.translations.en.name);
                }}
                role="option"
                aria-selected={index === activeIndex}
              >
                {item.translations?.en?.name} ({item.model})
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
