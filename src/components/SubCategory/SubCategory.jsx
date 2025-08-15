import React from "react";
import './SubCategory.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const BASE_URL = "https://ronixtools.duckdns.org";

export default function SubCategory({ data }) {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Функция перехода при клике
  const handleClick = (subcategoryPath) => {
    navigate(`/product${subcategoryPath}`);
  };

  // Получение перевода или запасного названия
  const getTranslatedName = (translation, fallback) => {
    const lang = i18n.language;
    return (
      translation?.[lang]?.name ||
      translation?.ru?.name ||
      fallback ||
      "Нет названия"
    );
  };

  return (
    <section className="sub-category">
      <Container>
        <Row className="justify-content-center">
          {data.map(({ id, image, translation, path, name }) => (
            <Col
              key={id}
              xs={6}
              md={2}
              onClick={() => handleClick(path)}
              className="cards"
            >
             <img
  src={image?.startsWith("http") ? image : `https://api.ronix.uz${image}`}
  alt={getTranslatedName(translation, name)}
/>

              <p>{getTranslatedName(translation, name)}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
