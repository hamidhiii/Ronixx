import React from 'react'
import './SubcategoryStorage.scss'
import { subCategoryToolBoxes } from '../../Constants/Index'
import { Col, Container, Row } from 'react-bootstrap'

export default function SubcategoryStorage() {
  return (
    <section className="sub-category">
    <Container>
        <Row className="justify-content-center">
            {subCategoryToolBoxes.map(({id, title, img}) => (
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
