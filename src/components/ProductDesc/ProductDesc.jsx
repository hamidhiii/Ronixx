import React, { useState } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ProductDesc({ product }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const productImg = [`https://ronixtools.duckdns.org${product.image}`];

  const productDesc = [
    {
      id: 1,
      title: "Модель",
      content: product.model,
    },
    {
      id: 2,
      title: "Производитель",
      content: product.translations?.en?.made_in || "Не указано",
    },
    {
      id: 3,
      title: "Цена",
      content: `${product.price} $`,
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          {productImg.map((img, index) => (
            <Col key={index} md={12}>
              <img src={img} alt={`Product Image ${index + 1}`} />
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
