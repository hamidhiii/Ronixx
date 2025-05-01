import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/img/Variant.png'
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import './Navbar.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Container> 
             <Row>
          <Col lg={'auto'}>
            <Link to={'/'}><img src={logo} alt="" className='logo' /></Link>
          </Col>
          <Col lg={3} className='menulist'>
            <ul>
              <Menu />
            </ul>
          </Col>
          <Col lg={3} className='search'>
            <Search />
          </Col>
          <Col lg={'auto'}>
            <button>
              <FaShoppingCart />
            </button>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}
