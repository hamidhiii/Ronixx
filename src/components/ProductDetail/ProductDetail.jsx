import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/api/productsApi";
import { Col, Container, Row } from "react-bootstrap";
import CarouselProduct from "../CaruselProduct/CaruselProduct";
import ProductCard from "../ProductCard/ProductCard";
import ProductDesc from "../ProductDesc/ProductDesc";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export default function ProductDetail() {
  
  const { productName } = useParams();
  
  
  const { data: product, isLoading, isError } = useGetProductByIdQuery(productName);

  if (isLoading) {
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <Skeleton height={400} />
          </Col>
          <Col lg={6}>
            <Skeleton height={30} width={300} style={{ marginBottom: '10px' }} />
            <Skeleton count={5} />
          </Col>
          <Col lg={12}>
            <Skeleton count={3} />
          </Col>
        </Row>
      </Container>
    );
  }
  
  if (isError || !product) return <div>Ошибка загрузки продукта</div>;

  const productImages = [`https://ronixtools.duckdns.org${product.image}`];

  return (
    <Container>
      <Row className="product-detail-page">
        <Col lg={6} className="product-image">
          <CarouselProduct images={productImages} />
        </Col>
        <Col lg={6} className="product-details">
          <ProductCard product={product} />
        </Col>
        <Col lg={12}>
          <ProductDesc product={product} />
        </Col>
      </Row>
    </Container>
  );
}
