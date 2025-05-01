import React, { useState } from 'react';
import './ProductDesc.scss';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { productDesc, productImg } from '../../Constants/Index';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function ProductDesc() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccordion(prev => (prev === id ? null : id));
    };

    return (
        <section >
            <Container>
                <Row>
                    {productImg.map(({ img, id, title }) => (
                        <Col key={id} md={12}>
                            <img src={img} alt={title}  />
                            <h5>{title}</h5>
                        </Col>
                    ))}

                    <Col md={12}>
                        <Accordion activeKey={activeAccordion} className="product-desc-accordion">
                            {productDesc.map(({ title, content, id }) => (
                                <Accordion.Item eventKey={id.toString()} key={id}>
                                    <Accordion.Header onClick={() => toggleAccordion(id.toString())}>
                                        {title}
                                        <span style={{ marginLeft: "8px" }}>
                                            {activeAccordion === id.toString() ? <FaMinus /> : <FaPlus />}
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body>{content}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
