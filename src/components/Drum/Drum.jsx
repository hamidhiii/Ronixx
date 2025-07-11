import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import axios from "axios";

import "./Drum.scss";
import { useGetCategoriesQuery } from "../../services/api/categoriesApi";

const BASE_URL = "https://ronixtools.duckdns.org";

const Drum = () => {
  const { i18n } = useTranslation();
  const { data: categories = [], isLoading, isError, error } = useGetCategoriesQuery();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [categoryTranslations, setCategoryTranslations] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const categoryNames = [
      "Power  Tools",
      "Hand Tools",
      "Car Jacks",
      "Lifting Equipment",
      "Tool Storage",
      "Tool Accessories",
      "Safety Equipment",
      "Measuring Tools",
      "Work Lights",
      "Cordless Tools"
    ];

    const fetchTranslations = async () => {
      const translations = {};

      for (const name of categoryNames) {
        try {
          const response = await axios.get(`${BASE_URL}/categories/${encodeURIComponent(name)}/`);
          translations[name] = response.data.translations;
        } catch (err) {
          console.error(`Ошибка загрузки перевода для ${name}:`, err);
        }
      }

      setCategoryTranslations(translations);
    };

    fetchTranslations();
  }, []);

  const total = categories.length || 6;
  const radius = 200;
  const deltaAngle = total > 0 ? 360 / total : 0;
  const mod = (n, m) => ((n % m) + m) % m;
  const handleUp = () => setActiveIndex(prev => mod(prev - 1, total));
  const handleDown = () => setActiveIndex(prev => mod(prev + 1, total));

  const getTranslatedName = (categoryName) => {
    const translations = categoryTranslations?.[categoryName];
    const lang = i18n.language;
  
    if (!translations) return "";
  
    const translatedName = translations[lang]?.name || translations["ru"]?.name;
    return translatedName || "";
  };
  
  

  if (isError) return <div>Ошибка загрузки: {error?.data?.message || "Неизвестная ошибка"}</div>;
  if (total === 0) return <div>Категории не найдены</div>;

  return (
    <div className="background">
      {isMobile ? (
        <div className="horizontal-slider">
          <div className="slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {(isLoading ? Array.from({ length: 6 }) : categories).map((category, index) => (
              <div className="slider-item-horizontal" key={index}>
                {isLoading ? (
                  <Skeleton height={150} width={"90%"} />
                ) : (
                  <Link to={category.path}>
                    <img src={`${BASE_URL}${category.image}`} alt={getTranslatedName(category.name)} />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mobile-controls">
            <button onClick={handleUp}>‹</button>
            <span>
              {isLoading ? <Skeleton width={80} /> : getTranslatedName(categories[activeIndex]?.name)}
            </span>
            <button onClick={handleDown}>›</button>
          </div>
        </div>
      ) : (
        <div className="slider-container">
          <div className="circle-slider">
            {(isLoading ? Array.from({ length: 6 }) : categories).map((category, index) => {
              const angle = (index - activeIndex) * deltaAngle;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              const isActive = index === activeIndex;

              return isLoading ? (
                <div
                  key={index}
                  className={`slider-item ${isActive ? "active" : ""}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    zIndex: total - Math.abs(index - activeIndex),
                  }}
                >
                  <div style={{ width: '250px', height: '150px', borderRadius: '10px', overflow: 'hidden' }}>
                    <Skeleton height="100%" width="100%" />
                  </div>
                </div>
              ) : (
                <Link
                  key={category.id}
                  to={category.path}
                  className={`slider-item ${isActive ? "active" : ""}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    zIndex: total - Math.abs(index - activeIndex),
                  }}
                >
                  <img src={`${BASE_URL}${category.image}`} alt={getTranslatedName(category.name)} />
                </Link>
              );
            })}
          </div>

          <div className="slider-text fade-in">
            {isLoading ? <Skeleton width={120} /> : getTranslatedName(categories[activeIndex]?.name)}
          </div>
        </div>
      )}

      <div className="controls">
        <button className="prev-btn" onClick={handleUp}>▲</button>
        <button className="next-btn" onClick={handleDown}>▼</button>
      </div>
    </div>
  );
};

export default Drum;
