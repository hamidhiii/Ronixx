import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Variant.png";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../i18n/LanguageSwitcher";

export default function NavbarDesktop({ onSearch }) {
  return (
    <nav className="navbar">
      <Container>
        <Row className="align-items-center">
          <Col className="logotip" md={1}>
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </Col>

          <Col lg={3} md={1} className="menulist">
            <ul>
              <Menu />
            </ul>
          </Col>

          <Col lg={4} md={3} className="search">
            <Search onSearch={onSearch} />
          </Col>

          <Col lg={1} md={1} xs={1} className="ThemeToggle">
            <ThemeToggle />
          </Col>

          <Col lg={1} md={1} xs={1} className="LanguageSwitcher">
            <LanguageSwitcher />
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
