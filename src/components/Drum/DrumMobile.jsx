import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

import { useGetCategoriesQuery } from "../../services/api/categoriesApi";
import "./DrumMobile.scss";

const BASE_URL = "https://ronixtools.duckdns.org";

const DrumMobile = () => {
  const { i18n } = useTranslation();
  const { data: categories = [], isLoading, isError, error } = useGetCategoriesQuery();
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryTranslations, setCategoryTranslations] = useState({});

  const items = isLoading ? Array.from({ length: 6 }) : categories;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Автопрокрутка
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  // Загрузка переводов
  useEffect(() => {
    const categoryNames = [
      "Power  Tools", "Hand Tools", "Car Jacks", "Lifting Equipment",
      "Tool Storage", "Tool Accessories", "Safety Equipment",
      "Measuring Tools", "Work Lights", "Cordless Tools"
    ];

    const fetchTranslations = async () => {
      const translations = {};
      for (const name of categoryNames) {
        try {
          const res = await axios.get(`${BASE_URL}/categories/${encodeURIComponent(name)}/`);
          translations[name] = res.data.translations;
        } catch (err) {
          console.error("Ошибка перевода:", name, err);
        }
      }
      setCategoryTranslations(translations);
    };

    fetchTranslations();
  }, []);

  const getTranslatedName = (categoryName) => {
    const translations = categoryTranslations?.[categoryName];
    const lang = i18n.language;

    if (!translations) return "";

    return (
      translations[lang]?.name ||
      translations["ru"]?.name ||
      categoryName ||
      ""
    );
  };

  if (isError) return <div className="error">Ошибка: {error?.data?.message || "Неизвестная ошибка"}</div>;
  if (!isLoading && items.length === 0) return <div className="error">Категории не найдены</div>;

  return (
    <div className="drum-mobile">
      <div className="carousel">
        <button className="nav-btn left" onClick={prevSlide}>‹</button>

        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div className="carousel-slide" key={item?.id || index}>
                {isLoading ? (
                  <Skeleton width={250} height={150} />
                ) : (
                  <Link to={item.path}>
                    <img
                      src={`${BASE_URL}${item.image}`}
                      alt={getTranslatedName(item.name)}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>›</button>
      </div>

      <div className="caption">
        {isLoading ? (
          <Skeleton width={120} />
        ) : (
          getTranslatedName(categories[activeIndex]?.name)
        )}
      </div>
    </div>
  );
};

export default DrumMobile;
