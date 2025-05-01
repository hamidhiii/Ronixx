import React from 'react'
import './SubCategoryAccesories.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { subCategoryAccessories } from '../../Constants/Index'

export default function SubCategoryAccesories() {
    return (
        <section className="sub-category">
            <Container>
                <Row className="justify-content-center">
                    {subCategoryAccessories.map(({ id, title, img }) => (
                        <Col className='cards' key={id}>
                            <img src={img} alt={title} />
                            <p>{title}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>)
}
