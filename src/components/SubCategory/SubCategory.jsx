import React from 'react'
import './SubCategory.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SubCategory({data}) {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate('/products')
  } 
  return (
    <section className="sub-category">
      
        <Container>
            <Row className="justify-content-center" onClick={handleClick}>
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
