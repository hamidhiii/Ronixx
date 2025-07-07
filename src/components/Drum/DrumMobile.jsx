import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useGetCategoriesQuery } from "../../services/api/categoriesApi";
import "./DrumMobile.scss";

const BASE_URL = "https://ronixtools.duckdns.org";

const DrumMobile = () => {
  const { t } = useTranslation();
  const { data: categories = [], isLoading, isError, error } = useGetCategoriesQuery();

  const [activeIndex, setActiveIndex] = useState(0);
  const total = categories.length || 6;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  if (isError) return <div className="error">Ошибка: {error?.data?.message || "Неизвестная ошибка"}</div>;
  if (total === 0) return <div className="no-categories">Категории не найдены</div>;

  return (
    <div className="drum-mobile">
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={handlePrev}>‹</button>

        <div className="carousel-track">
          {(isLoading ? Array.from({ length: 6 }) : categories).map((category, index) => {
            const isActive = index === activeIndex;
            return isLoading ? (
              <div key={index} className={`carousel-item ${isActive ? "active" : ""}`}>
                <Skeleton height={150} width={250} style={{ borderRadius: 10 }} />
              </div>
            ) : (
              <Link
                key={category.id}
                to={category.path}
                className={`carousel-item ${isActive ? "active" : ""}`}
              >
                <img src={`${BASE_URL}${category.image}`} alt={t(category.name)} />
              </Link>
            );
          })}
        </div>

        <button className="carousel-btn right" onClick={handleNext}>›</button>
      </div>

      <div className="carousel-caption">
        {isLoading ? <Skeleton width={120} /> : t(categories[activeIndex].name)}
      </div>
    </div>
  );
};

export default DrumMobile;
