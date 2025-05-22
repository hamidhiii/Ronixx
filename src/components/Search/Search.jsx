import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "../../Constants/products";


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
    ${item.category || ''}
    ${item.brand || ''}
    ${item.description || ''}
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
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) {
        const selected = suggestions[activeIndex];
        navigate(`/search-results?query=${encodeURIComponent(selected.name)}`);
        setQuery("");
        setSuggestions([]);
        setActiveIndex(-1);
      } else if (query.trim()) {
        navigate(`/search-results?query=${encodeURIComponent(query.trim())}`);
        setQuery("");
        setSuggestions([]);
        setActiveIndex(-1);
      }
    }
  };

  const handleSuggestionClick = (name) => {
    navigate(`/search-results?query=${encodeURIComponent(name.trim())}`);
    setQuery("");
    setSuggestions([]);
    setActiveIndex(-1);
  };

  return (
    <div className="search-wrapper" style={{ position: "relative" }}>
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
          className="suggestions"
          role="listbox"
          style={{
            position: "absolute",
            background: "#fff",
            border: "1px solid #ccc",
            margin: 0,
            padding: "0.5rem",
            listStyle: "none",
            width: "100%",
            zIndex: 10,
          }}
        >
          {suggestions.map((item, index) => (
            <li
              id={`suggestion-${index}`}
              key={item.id}
              style={{
                padding: "0.25rem",
                cursor: "pointer",
                backgroundColor:
                  index === activeIndex ? "#bde4ff" : "transparent",
              }}
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
  );
}
