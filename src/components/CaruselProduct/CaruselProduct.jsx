import React, { useEffect, useState } from "react";
import "./CaruselProduct.scss";

const CarouselProduct = ({ images = [] }) => {
  // текущее выбранное фото
  const [selectedImage, setSelectedImage] = useState(null);

  // когда список картинок обновляется — берём первую
  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
    } else {
      setSelectedImage(null);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="image-carousel">
        <div className="carousel-main">
          <div className="empty">Нет изображений</div>
        </div>
      </div>
    );
  }

  return (
    <div className="image-carousel">
      {/* Мини-превью */}
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Основная картинка */}
      <div className="carousel-main">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxHeight: "500px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CarouselProduct;
