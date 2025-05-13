import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import "./Drum.scss";
import product1 from "../../assets/img/Product1.svg";

const images = [
  { src: product1, textKey: "electro_tools", path: "/electro-tools" },
  { src: product1, textKey: "hand_tools", path: "/hand-tools" },
  { src: product1, textKey: "battery_tools", path: "/battery-tools" },
  { src: product1, textKey: "flashlights", path: "/flashlights" },
  { src: product1, textKey: "measuring_devices", path: "/measuring-devices" },
  { src: product1, textKey: "protection", path: "/protection" },
  { src: product1, textKey: "accessories", path: "/accessories" },
  { src: product1, textKey: "toolboxes", path: "/toolboxes" },
  { src: product1, textKey: "lifting_equipment", path: "/lifting-equipment" },
  { src: product1, textKey: "jacks", path: "/jacks" },
];

const Drum = () => {
  const { t } = useTranslation(); // Используем функцию перевода
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;
  const radius = 200;
  const deltaAngle = 360 / total;

  const mod = (n, m) => ((n % m) + m) % m;

  const handleUp = () => setActiveIndex((prev) => mod(prev - 1, total));
  const handleDown = () => setActiveIndex((prev) => mod(prev + 1, total));

  return (
    <div className="background">
      <div className="slider-container">
        <div className="circle-slider">
          {images.map((image, index) => {
            const angle = (index - activeIndex) * deltaAngle;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const isActive = index === activeIndex;

            return (
              <Link
                key={index}
                to={image.path}
                className={`slider-item ${isActive ? "active" : ""}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  zIndex: total - Math.abs(index - activeIndex),
                }}
              >
                <img src={image.src} alt={t(image.textKey)} />
              </Link>
            );
          })}
        </div>

        <div className="slider-text fade-in">{t(images[activeIndex].textKey)}</div>
      </div>

      <div className="controls">
        <button className="prev-btn" onClick={handleUp}>▲</button>
        <button className="next-btn" onClick={handleDown}>▼</button>
      </div>
    </div>
  );
};

export default Drum;
