import React from 'react';
import './DrilsHeader.scss';
import { Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function DrilsHeader({ data }) {
  const { i18n } = useTranslation();
  const { id, title, desc, mainImage, translations } = data[0] || {};

  
  const translatedTitle =
    translations?.[i18n.language]?.name ||
    translations?.ru?.name ||
    title;


  const translatedDesc =
    translations?.[i18n.language]?.description ||
    translations?.ru?.description ||
    desc;

  return (
    <section>
      <div className="position-relative">
        <img
          src={mainImage ? `https://ronixtools.duckdns.org${mainImage}` : ''}
          alt={translatedTitle}
          className="headerfotos"
        />
      </div>

      <Container key={id}>
        <Col lg={10} className="text-center">
          <h1>{translatedTitle}</h1>
          <p>{translatedDesc}</p>
        </Col>
      </Container>
    </section>
  );
}
