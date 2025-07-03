import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

import "./Drum.scss";
import { useGetCategoriesQuery } from "../../services/api/categoriesApi";

const BASE_URL = "https://ronixtools.duckdns.org";

const Drum = () => {
  const { t } = useTranslation();
  const { data: categories = [], isLoading, isError, error } = useGetCategoriesQuery();

  const [activeIndex, setActiveIndex] = useState(0);

  const total = categories.length || 6; // Количество skeleton карточек
  const radius = 200;
  const deltaAngle = total > 0 ? 360 / total : 0;

  const mod = (n, m) => ((n % m) + m) % m;

  const handleUp = () => setActiveIndex(prev => mod(prev - 1, total));
  const handleDown = () => setActiveIndex(prev => mod(prev + 1, total));

  if (isError) return <div>Ошибка загрузки: {error?.data?.message || "Неизвестная ошибка"}</div>;
  if (total === 0) return <div>Категории не найдены</div>;

  return (
    <div className="background">
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
                  <Skeleton height="100%"
                    width="100%"
                    baseColor="#f0f0f0" 
                    highlightColor="#e0e0e0" 
                    className="pulse-skeleton" />
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
                <img src={`${BASE_URL}${category.image}`} alt={t(category.name)} />
              </Link>
            );
          })}
        </div>

        <div className="slider-text fade-in">
          {isLoading ? <Skeleton width={120} /> : t(categories[activeIndex].name)}
        </div>
      </div>

      <div className="controls">
        <button className="prev-btn" onClick={handleUp}>▲</button>
        <button className="next-btn" onClick={handleDown}>▼</button>
      </div>
    </div>
  );
};

export default Drum;
