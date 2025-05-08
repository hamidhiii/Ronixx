import React, { useState } from "react";
import "./CaruselProduct.scss"; 
const CarouselProduct = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="image-carousel">
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
      <div className="carousel-main">
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};

export default CarouselProduct;
