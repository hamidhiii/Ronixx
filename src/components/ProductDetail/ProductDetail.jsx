import React from "react";
import { FaStar } from "react-icons/fa";
import './ProductDetail.scss';
import { PRODUCT_DETAILS } from "../../Constants/Index";
import { Col, Container, Row } from "react-bootstrap";
import CarouselProduct from "../CaruselProduct/CaruselProduct";
import ProductCard from "../ProductCard/ProductCard";
import ProductDesc from "../ProductDesc/ProductDesc";

export default function ProductDetail() {
  const { name, model, rating, images } = PRODUCT_DETAILS;

  return (
    <Container>
      <Row>
        <div className="product-detail-page">
          <div className="product-container">
            <Col lg={6} className="product-image">
              <CarouselProduct images={images} />
            </Col>
            <Col lg={6} className="product-details">
             <ProductCard/>
            </Col>
            <Col lg = {12}>
            <ProductDesc/>
            </Col>
          </div>
        </div>
      </Row>
    </Container>
  );
}
