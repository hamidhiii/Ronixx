import React from 'react'
import './SubCategory.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SubCategory({ data }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/products`); 
  };

  return (
    <section className="sub-category">
      <Container>
        <Row className="justify-content-center">
          {data.map((item) => (
            <Col
              key={item.id}
              xs={6}
              md={2}
              className="cards"
              onClick={() => handleClick(item.path)}
            >
              <img src={item.image} alt={item.translation?.en?.name} />
              <p>{item.translation?.en?.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
