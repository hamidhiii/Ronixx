import React from 'react'
import './SubCategoryLights.scss'
import { subCategoryLights } from '../../Constants/Index'
import { Col, Container, Row } from 'react-bootstrap'

export default function SubCategoryLights() {
  return (
    <section className="sub-category">
    <Container>
        <Row className="justify-content-center">
            {subCategoryLights.map(({id, title, img}) => (
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
