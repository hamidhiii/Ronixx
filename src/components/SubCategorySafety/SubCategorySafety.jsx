import React from 'react'
import './SubCategorySafety.scss'
import { subCategoryProtection } from '../../Constants/Index'
import { Col, Container, Row } from 'react-bootstrap'

export default function SubCategorySafety() {
  return (
    <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
                {subCategoryProtection.map(({id, title, img}) => (
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
