import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ronix from '../../assets/img/Variant.png'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next' // Импортируем useTranslation

export default function Footer() {
  const { t } = useTranslation(); // Инициализируем функцию перевода

  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col className='lg3' lg={2} md='auto' sm="auto" xs="auto">
                    <img src={ronix} alt="Ronix" />
                </Col>

         <Col className='lg'>
  <Row sm="auto" className="footer-links">
    <Col lg={4} md={6} sm={5} xs={6}>
      <ul>
        <li className='All'>{t('all_products')}</li>
        <li><Link to={''}>{t('electro_tools')}</Link></li>
        <li><Link to={''}>{t('hand_tools_wholesale')}</Link></li>
        <li><Link to={''}>{t('flashlights_wholesale')}</Link></li>
      </ul>
    </Col>
    <Col lg={4} md={6} sm={5} xs={6}>
      <ul>
        <li><Link to={''}>{t('protection_tools')}</Link></li>
        <li><Link to={''}>{t('accessories_for_tools')}</Link></li>
        <li><Link to={''}>{t('toolboxes_bags')}</Link></li>
      </ul>
    </Col>
    <Col lg={4}  md={6} sm={5} xs={6}>
      <ul>
        <li><Link to={''}>{t('lifting_equipment')}</Link></li>
        <li><Link to={''}>{t('jacks')}</Link></li>
        <li><Link to={''}>{t('measuring_devices')}</Link></li>
      </ul>
    </Col>
  </Row>
</Col>

            </Row>
        </Container>
    </div>
  )
}
