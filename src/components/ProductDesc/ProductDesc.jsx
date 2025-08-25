import React, { useState } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ProductDesc({ product }) {
  const [activeAccordion, setActiveAccordion] = useState("1");
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  // Берём только main_image; если его нет — fallback на product.image
  const mainImagePath =
    product?.main_image || product?.product?.image || product?.image || null;

  const mainImageUrl = mainImagePath
    ? (mainImagePath.startsWith("http")
        ? mainImagePath
        : `https://api.ronix.uz${mainImagePath}`)
    : null;

  // Текст берём из верхнеуровневых translations
  const tdata =
    product?.translations?.[currentLang] ||
    product?.translations?.ru ||
    product?.translations?.en ||
    {};

  const productDesc = [
    {
      id: "1",
      title: tdata.title || "Описание",
      content: tdata.description || "Нет описания",
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          {mainImageUrl && (
            <Col lg={12} md={12} className="d-flex justify-content-center">
              <div className="image-wrapper">
                <img
                  src={mainImageUrl}
                  alt={tdata.title || "Главное изображение"}
                  className="product-main-image"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </Col>
          )}

          <Col md={12}>
            <Accordion
              activeKey={activeAccordion}
              className="product-desc-accordion"
            >
              {productDesc.map(({ title, content, id }) => (
                <Accordion.Item eventKey={id} key={id}>
                  <Accordion.Header onClick={() => toggleAccordion(id)}>
                    {title}
                    <span style={{ marginLeft: "8px" }}>
                      {activeAccordion === id ? <FaMinus /> : <FaPlus />}
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
