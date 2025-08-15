import React from "react";
import "../ProductDrel/ProductDrel.scss"


import { Col, Container, Row } from "react-bootstrap";
import { categories } from "../../Constants/Index";

const ProductDrel = () => {
  return (
    <section className="sub-category">
    <Container>
        <Row className="justify-content-center">
            {categories.map(({id, name, image}) => (
                <Col className='cards' key={id}>
                    <img src={image} alt={name}/>
                    <p>{name}</p>
                </Col>
            ))}
        </Row>
    </Container>
</section>
  );
};

export default ProductDrel;
