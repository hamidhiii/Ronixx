import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Variant.png";
import Menu from "../Menu/Menu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../i18n/LanguageSwitcher";

export default function NavbarMobile() {
  return (
    <nav className="navbar">
      <Container>
        <Row className="align-items-center navbar-content">
          <Col className="d-flex align-items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <Menu />
          </Col>

          <div className="buttons">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </Row>
      </Container>
    </nav>
  );
}
