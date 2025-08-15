import React, { useState } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ProductDesc({ product }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  // Выбираем главное изображение: сначала из main_image, потом из image
  const mainImagePath =
    product.details?.[0]?.main_image || product.image;

  const productImg = [`https://api.ronix.uz${mainImagePath}`];

  // Переводимые данные
  const productDesc = product.details?.map((detail, index) => {
    const translations = detail.translations || {};
    const data = translations[currentLang] || translations["ru"] || {};
    return {
      id: index + 1,
      title: data.title || `Раздел ${index + 1}`,
      content: data.description || "Нет описания"
    };
  }) || [];

  return (
    <section>
      <Container>
        <Row>
          {productImg.map((img, index) => (
            <Col key={index} lg={12} md={12} className="d-flex justify-content-center">
              <div className="image-wrapper">
                <img
                  src={img}
                  alt={`Product Image ${index + 1}`}
                  className="product-main-image"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
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
