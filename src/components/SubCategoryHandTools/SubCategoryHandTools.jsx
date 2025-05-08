import React from 'react'
import './SubCategoryHandTools.scss'
import { subCategoryHandTools } from '../../Constants/Index'
import { Col, Container, Row } from 'react-bootstrap'

function SubCategoryHandTools() {
    return (
        <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
                {subCategoryHandTools.map(({id, title, img}) => (
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

export default SubCategoryHandTools
