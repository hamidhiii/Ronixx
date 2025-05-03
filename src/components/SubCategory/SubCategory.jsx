import React from 'react'
import './SubCategory.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { subCategory } from '../../Constants/Index'

export default function SubCategory() {
  return (
    <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
                {subCategory.map(({id, title, img}) => (
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
