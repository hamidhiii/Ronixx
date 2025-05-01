import React from 'react'
import './SubCategoryMeansuring.scss'
import { subCategoryMeansuring } from '../../Constants/Index'
import { Col, Container, Row } from 'react-bootstrap'

export default function SubCategoryMeansuring() {
  return (
    <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
                {subCategoryMeansuring.map(({id, title, img}) => (
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
