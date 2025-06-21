import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Drum.scss";
import { useGetCategoriesQuery } from "../../services/api/categoriesApi";

const BASE_URL = "https://ronixtools.duckdns.org";

const Drum = () => {
  const { t } = useTranslation();
  const { data: categories = [], isLoading, isError, error } = useGetCategoriesQuery();

  const [activeIndex, setActiveIndex] = useState(0);

  const total = categories.length;
  const radius = 200;
  const deltaAngle = total > 0 ? 360 / total : 0;

  const mod = (n, m) => ((n % m) + m) % m;

  const handleUp = () => setActiveIndex(prev => mod(prev - 1, total));
  const handleDown = () => setActiveIndex(prev => mod(prev + 1, total));

  if (isLoading) return <div>Загрузка категорий...</div>;
  if (isError) return <div>Ошибка загрузки: {error?.data?.message || "Неизвестная ошибка"}</div>;
  if (total === 0) return <div>Категории не найдены</div>;

  return (
    <div className="background">
      <div className="slider-container">
        <div className="circle-slider">
          {categories.map((category, index) => {
            const angle = (index - activeIndex) * deltaAngle;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const isActive = index === activeIndex;

            return (
              <Link
                key={category.id}
                to={category.path}
                className={`slider-item ${isActive ? "active" : ""}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  zIndex: total - Math.abs(index - activeIndex),
                }}
              >
                <img
                  src={`${BASE_URL}${category.image}`}
                  alt={t(category.name)}
                />
              </Link>
            );
          })}
        </div>
        <div className="slider-text fade-in">{t(categories[activeIndex].name)}</div>
      </div>

      <div className="controls">
        <button className="prev-btn" onClick={handleUp}>▲</button>
        <button className="next-btn" onClick={handleDown}>▼</button>
      </div>
    </div>
  );
};

export default Drum;
