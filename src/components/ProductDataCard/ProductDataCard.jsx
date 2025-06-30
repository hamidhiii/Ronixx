import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductDataCard.scss";

export const ProductDataCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (productName) => {
    navigate(`/product/details/${encodeURIComponent(productName)}`);
  };

  return (
    <Container>
      <Row>
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-4 d-flex justify-content-center">
      <div className="product-cards" id={`product-${product.id}`} onClick={() => handleClick(product.translations.en.name)}>

        <img src={`https://ronixtools.duckdns.org${product.image}`} alt={product.translations?.en?.name} className="product-image" />

        <p className="product-code">{product.model}</p>

        <div className="product-details">
          <h3 className="product-title">{product.translations?.en?.name}</h3>
          <div className="product-specs-row">
            <span className="spec-item">Chuck Type: Keyed</span>
            <span className="spec-item">Chuck Size: 10mm</span>
          </div>
        </div>

      </div>
    </Col>
      </Row>
    </Container>
  );
};
