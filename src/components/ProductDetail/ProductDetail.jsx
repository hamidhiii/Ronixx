import React from "react";
import { FaStar } from "react-icons/fa";
import './ProductDetail.scss';
import { PRODUCT_DETAILS, productData } from "../../Constants/Index";
import { Col, Container, Row } from "react-bootstrap";
import CarouselProduct from "../CaruselProduct/CaruselProduct";
import ProductCard from "../ProductCard/ProductCard";
import ProductDesc from "../ProductDesc/ProductDesc";

export default function ProductDetail() {
  const { name, model, rating, images } = PRODUCT_DETAILS;
  const {item} = productData

  return (
    <Container>
      <Row className="product-detail-page">
        <Col lg={6} className="product-image">
          <CarouselProduct images={images} />
        </Col>
        <Col lg={6} className="product-details">
          <ProductCard />
        </Col>
        <Col lg={12}>
          <ProductDesc />
        </Col>
      </Row>
    </Container>
  );
}

