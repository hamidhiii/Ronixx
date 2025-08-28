import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search as SearchIcon, X as ClearIcon } from "lucide-react";
import { useGetAllProductsQuery } from "../../services/api/productsApi";
import { useTranslation } from "react-i18next";
import "./Search.scss";

export default function Search({ setIsSearchOpen, mobile }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  const { data: products = [], isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    if (location.pathname === "/search") {
      setQuery("");
      setSuggestions([]);
      setActiveIndex(-1);
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0 && products.length > 0) {
      const searchTerm = value.toLowerCase().trim();
      const filtered = products.filter((item) => {
        const lang = i18n.language;
        const translatedName = item.translations?.[lang]?.name || "";
        const combinedText = `
          ${translatedName}
          ${item.model || ""}
          ${item.category || ""}
          ${item.brand || ""}
          ${item.description || ""}
        `.toLowerCase();
        return combinedText.includes(searchTerm);
      });

      setSuggestions(filtered.slice(0, 5));
      setActiveIndex(-1);
    } else {
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        const selected = suggestions[activeIndex];
        const enName = selected.translations?.en?.name || selected.id;
        navigate(`/product/details/${encodeURIComponent(enName)}`);
      } else if (query.trim()) {
        navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
      }
      setQuery("");
      setSuggestions([]);
      setActiveIndex(-1);
      setIsSearchOpen && setIsSearchOpen(false);
    }
  };

  const handleSuggestionClick = (item) => {
    const enName = item.translations?.en?.name || item.id;
    navigate(`/product/details/${encodeURIComponent(enName)}`);
    setQuery("");
    setSuggestions([]);
    setActiveIndex(-1);
    setIsSearchOpen && setIsSearchOpen(false);
  };

  return (
    <form
      className={mobile ? "search-fullscreen-wrapper" : "search-form"}
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
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
        {query.length > 0 && (
          <ClearIcon className="clear-icon" onClick={() => setQuery("")} />
        )}

        {isLoading && (
          <div className="skeleton-wrapper">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="skeleton-item"></div>
            ))}
          </div>
        )}

        {suggestions.length > 0 && (
          <ul className="suggestions show" role="listbox">
            {suggestions.map((item, index) => {
              const translatedName =
                item.translations?.[i18n.language]?.name || item.translations?.en?.name || "";
              return (
                <li
                  id={`suggestion-${index}`}
                  key={item.id}
                  className={index === activeIndex ? "active" : ""}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSuggestionClick(item);
                  }}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  {translatedName} {item.model ? `(${item.model})` : ""}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {mobile && (
        <ClearIcon className="close-btn" onClick={() => setIsSearchOpen(false)} />
      )}
    </form>
  );
}
