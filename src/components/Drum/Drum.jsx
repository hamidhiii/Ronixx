import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Drum.scss";
import product1 from "../../assets/img/Product1.svg";

const images = [
  { src: product1, text: "Электроинструменты", path: "/electro-tools" },
  { src: product1, text: "Ручные инструменты", path: "/hand-tools" },
  { src: product1, text: "Аккумуляторные инструменты", path: "/battery-tools" },
  { src: product1, text: "Фонари", path: "/flashlights" },
  { src: product1, text: "Измерительные приборы", path: "/measuring-devices" },
  { src: product1, text: "Средства индивидуальной защиты", path: "/protection" },
  { src: product1, text: "Аксессуары для инструментов", path: "/accessories" },
  { src: product1, text: "Ящики и сумки для инструмента", path: "/toolboxes" },
  { src: product1, text: "Грузоподъемное оборудование", path: "/lifting-equipment" },
  { src: product1, text: "Домкраты", path: "/jacks" },
];

const Drum = () => {
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
                <img src={image.src} alt={image.text} />
              </Link>
            );
          })}
        </div>

        <div className="slider-text fade-in">{images[activeIndex].text}</div>
      </div>

      <div className="controls">
        <button className="prev-btn" onClick={handleUp}>▲</button>
        <button className="next-btn" onClick={handleDown}>▼</button>
      </div>
    </div>
  );
};

export default Drum;
