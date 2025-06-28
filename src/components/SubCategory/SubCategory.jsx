import React from "react";
import './SubCategory.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function SubCategory({ data }) {
  const navigate = useNavigate();
  const { slug: subcategoryPath } = useParams(); // берем родительскую категорию
  const handleClick = (subcategoryPath) => {
    navigate(`/product${subcategoryPath}`); // path = '/Drills'
  };
  
  
  
  
  return (
    <section className="sub-category">
      <Container>
        <Row className="justify-content-center">
          {data.map(({ id, image, translation, path }) => {

            return (
              <Col key={id} xs={6} md={2} onClick={() => handleClick(path)} className="cards">
                <img src={image} alt={translation?.en?.name} />
                <p>{translation?.en?.name}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
