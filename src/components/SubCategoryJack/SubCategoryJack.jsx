import React from 'react'
import './SubCategoryJack.scss'
import { SubCategoryJacks } from '../../Constants/Index'
import { Col, Container, Row } from 'react-bootstrap'

export default function SubCategoryJack() {
  return (
    <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
                {SubCategoryJacks.map(({id, title, img}) => (
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
