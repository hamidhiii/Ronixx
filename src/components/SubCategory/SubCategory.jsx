import React from 'react'
import './SubCategory.scss'
import { Col, Container, Row } from 'react-bootstrap'

export default function SubCategory({data}) {
  return (
    <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
            {data.map(({ id, title, img }) => (
            <Col key={id} xs={6} md={2} className="cards">
              <img src={img} alt={title} />
              <p>{title}</p>
            </Col>
          ))}
            </Row>
        </Container>
    </section>
  )
}
