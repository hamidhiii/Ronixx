import React, { useState } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ProductDesc({ product }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const productImg = [`https://ronixtools.duckdns.org${product.image}`];

  // Формируем данные для аккордеона из details
  const productDesc = product.details?.map((detail, index) => ({
    id: index + 1,
    title: detail.translations?.en?.title || `Раздел ${index + 1}`,
    content: detail.translations?.en?.description || 'Нет описания'
  })) || [];

  return (
    <section>
      <Container>
        <Row>
          {productImg.map((img, index) => (
            <Col key={index} lg={12} md={12} className="d-flex justify-content-center">
              <div className="image-wrapper">
                <img src={img} alt={`Product Image ${index + 1}`} className="product-main-image" style={{
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    display: 'block'
  }} />
              </div>
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
