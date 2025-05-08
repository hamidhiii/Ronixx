import React from "react";
import "../ProductDrel/ProductDrel.scss"

import { categories } from "../../Constants/Index";
import { Col, Container, Row } from "react-bootstrap";

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
