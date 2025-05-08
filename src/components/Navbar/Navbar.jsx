import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/img/Variant.png';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import './Navbar.scss';


export default function Navbar() {
  return (
    <nav>
      <Container>
        <Row>
          <Col lg={'auto'}>
            <Link to={'/'}>
              <img src={logo} alt="Логотип компании" className="logo" />
            </Link>
          </Col>
          <Col lg={3} className="menulist">
            <ul>
              <Menu />
            </ul>
          </Col>
          <Col lg={3} className="search">
            <Search />
          </Col>
          <Col lg={'auto'}>
            <Link to="/basket">
              <button>
                <FaShoppingCart />
              </button>
            </Link>
         
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
