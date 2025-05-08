import React from 'react'
import './SubCategorySuplier.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { SubCategorySupplier } from '../../Constants/Index'

export default function SubCategorySuplier() {
  return (
    <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
                {SubCategorySupplier.map(({id, title, img}) => (
                    <Col className='cards' key={id}>
                        <img src={img} alt={title}/>
                        <p>{title}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}
