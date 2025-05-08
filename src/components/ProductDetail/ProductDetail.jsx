import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './ProductDetail.scss';
import { PRODUCT_DETAILS } from "../../Constants/Index";
import CarouselProduct from "../CaruselProduct/CaruselProduct";
import ProductCard from "../ProductCard/ProductCard";
import ProductDesc from "../ProductDesc/ProductDesc";

export default function ProductDetail() {
  const { name, model, rating, images } = PRODUCT_DETAILS;

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
