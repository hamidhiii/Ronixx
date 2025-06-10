import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "../../Constants/products";
import { Search as SearchIcon } from "lucide-react"; // или любая иконка
import "./Search.scss";

export default function Search() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();

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

    if (value.length > 0) {
      const searchTerm = value.toLowerCase().trim();
      const filtered = products.filter((item) => {
        const combinedText = `
          ${item.name}
          ${item.code}
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
        navigate(`/search-results?query=${encodeURIComponent(selected.name)}`);
      } else if (query.trim()) {
        navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
      }
      setQuery("");
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  const handleSuggestionClick = (name) => {
    navigate(`/search-results?query=${encodeURIComponent(name.trim())}`);
    setQuery("");
    setSuggestions([]);
    setActiveIndex(-1);
  };

  return (
    <form
      className="search-form"
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
          aria-activedescendant={
            activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined
          }
          role="combobox"
        />
        {suggestions.length > 0 && (
          <ul
            className={`suggestions ${suggestions.length > 0 ? "show" : ""}`}
            role="listbox"
          >
            {suggestions.map((item, index) => (
              <li
                id={`suggestion-${index}`}
                key={item.id}
                className={index === activeIndex ? "active" : ""}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSuggestionClick(item.name);
                }}
                role="option"
                aria-selected={index === activeIndex}
              >
                {item.name} ({item.code})
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
