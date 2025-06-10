import React from 'react';
import './DrilsHeader.scss';
import { Col, Container } from 'react-bootstrap';

export default function DrilsHeader({ data }) {
  const { id, title, desc, mainImage } = data[0] || {};

  return (
    <section>
      <div className="position-relative ">
        <img
          src={mainImage ? `http://139.59.62.159${mainImage}` : ''}
          alt={title || 'Category Image'}
          className='headerfotos'
        />
      </div>

      {/* Описание */}
      <Container key={id}>
        <Col lg={10} className='text-center'>
          <h1>{title}</h1>
          <p>{desc}</p>
        </Col>
      </Container>
    </section>
  );
}
