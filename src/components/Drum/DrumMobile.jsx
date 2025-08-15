import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

import { useGetCategoriesQuery } from "../../services/api/categoriesApi";
import "./DrumMobile.scss";

const BASE_URL = "https://api.ronix.uz";

const DrumMobile = () => {
  const { t, i18n } = useTranslation();
  const { data: categories = [], isLoading, isError, error } = useGetCategoriesQuery();

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [categoryTranslations, setCategoryTranslations] = useState({});

  const items = isLoading ? Array.from({ length: 6 }) : categories;

  const nextSlide = () => {
    if (activeIndex < items.length) {
      setActiveIndex((prev) => prev + 1);
    } else {
      setActiveIndex((prev) => prev + 1);
      setTimeout(() => {
        setTransitionEnabled(false);
        setActiveIndex(0);
      }, 500);
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 600);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
      setTimeout(() => {
        setTransitionEnabled(false);
        setActiveIndex(items.length);
      }, 500);
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = {};
      for (const item of categories) {
        try {
          const res = await axios.get(`${BASE_URL}/categories/${encodeURIComponent(item.name)}/`);
          translations[item.name] = res.data.translations;
        } catch (err) {
          console.error("Ошибка перевода:", item.name, err);
        }
      }
      setCategoryTranslations(translations);
    };

    if (categories.length > 0) {
      fetchTranslations();
    }
  }, [categories]);

  const getTranslatedName = (categoryName) => {
    const translations = categoryTranslations?.[categoryName];
    const lang = i18n.language;

    if (!translations) return categoryName;
    return translations[lang]?.name || translations["ru"]?.name || categoryName;
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
            style={{
              transform: `translateX(-${(activeIndex + 1) * 100}%)`,
              transition: transitionEnabled ? "transform 0.5s ease" : "none",
            }}
          >
            {/* Клон последнего элемента (в начало) */}
            {!isLoading && (
              <div className="carousel-slide" key="last-clone">
                <Link to={items[items.length - 1].path}>
                  <img
                    className="drum"
                    src={`${BASE_URL}${items[items.length - 1].image}`}
                    alt={getTranslatedName(items[items.length - 1].name)}
                  />
                </Link>
              </div>
            )}

            {items.map((item, index) => (
              <div className="carousel-slide" key={item?.id || index}>
                {isLoading ? (
                  <Skeleton width={250} height={150} />
                ) : (
                  <Link to={item.path}>
                    <img
                      className="drum"
                      src={`${BASE_URL}${item.image}`}
                      alt={getTranslatedName(item.name)}
                    />
                  </Link>
                )}
              </div>
            ))}

            {/* Клон первого элемента (в конец) */}
            {!isLoading && (
              <div className="carousel-slide" key="first-clone">
                <Link to={items[0].path}>
                  <img
                    className="drum"
                    src={`${BASE_URL}${items[0].image}`}
                    alt={getTranslatedName(items[0].name)}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>›</button>
      </div>

      <div className="caption">
        {isLoading ? <Skeleton width={120} /> : getTranslatedName(items[activeIndex % items.length]?.name)}
      </div>
    </div>
  );
};

export default DrumMobile;
