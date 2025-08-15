import React, { useState } from "react";
import "./CaruselProduct.scss";

const CarouselProduct = ({ images }) => {
  const fullImages = images.length > 0
    ? images.map(img => img.startsWith('http') ? img : `https://ronixtools.duckdns.org${img}`)
    : [];

  const [selectedImage, setSelectedImage] = useState(fullImages[0]);

  return (
    <div className="image-carousel">
      <div className="carousel-thumbnails">
        {fullImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="carousel-main">
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};

export default CarouselProduct;
