import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ronix from '../../assets/img/Variant.png'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col className='lg3' lg={2}>
                <img src={ronix} alt="" />
                </Col>

                <Col className='lg' lg={10}>
                <Col lg={4}>
                <ul >
                    <li>Все продукты</li>
                    <li>
                        <Link to={''} >электроинструмент </Link>
                    </li>
                    <li>
                        <Link to={''} >ручной инструмент оптом </Link>
                    </li>
                    <li>
                        <Link to={''} >Фонари и фонарики оптом </Link>
                    </li>
                 
                </ul>
                </Col>
                <Col lg={4}>
                <ul>
                    <li>
                        <Link to={''} >Средства индивидуальной </Link>
                    </li>
                    <li>
                        <Link to={''} >защиты (СИЗ)</Link>
                    </li>
                    <li>
                        <Link to={''} >аксессуары для инструментов</Link>
                    </li>
                    <li>
                        <Link to={''} >ящики и сумки для</Link>
                    </li>
                </ul>
                </Col>
                <Col lg={4}>
                <ul>
                    <li>
                        <Link to={''} >инструмента</Link>
                    </li>
                    <li>
                        <Link to={''} >Грузоподъемное оборудование</Link>
                    </li>
                    <li>
                        <Link to={''} >домкрат</Link>
                    </li>
                    <li>
                        <Link to={''} >измерительные приборы </Link>
                    </li>
                </ul>
                </Col>
              
                </Col>
            </Row>
        </Container>
    </div>
  )
}
