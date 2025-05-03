import React from 'react'
import headerfoto from '../../assets/img/638434286704017836.webp'
import './DrilsHeader.scss'
import { HeaderElectro } from '../../Constants/Index'
import { Col, Container } from 'react-bootstrap'

export default function DrilsHeader() {
  return (
    <section>
        <div className="position-relative">
          <img
            src={headerfoto}
            alt="Wholesale Power Tools"
            className='headerfotos'
          />
        </div>
        
        {/* Описание */}
        {HeaderElectro.map(({ id, title, desc }) => (
          <Container key={id} >
            <Col lg={10} className='text-center'>
              <h1 >{title}</h1>
              <p>{desc}</p>
            </Col>
          </Container>
        ))}
    </section>
  )
}
