import React, { useEffect, useState, useRef } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/img/Variant.png";
import Menu from "../Menu/Menu";

import "./Navbar.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import Search from "../Search/Search";

export default function Navbar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav>
      <Container>
        <Row className="align-items-center">
          <Col lg="auto">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </Col>

          <Col lg={3} className="menulist">
            <button className="burger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <FiMenu size={28} />
            </button>

            <nav className={`menu-nav ${menuOpen ? "open" : ""}`}>
              <ul>
                <Menu closeMenu={() => setMenuOpen(false)} />
                <li>
                  <ThemeToggle />
                </li>
                <li>
                  <LanguageSwitcher />
                </li>
                <li>
                  <Link to="/basket" onClick={() => setMenuOpen(false)}>
                    🛒 Корзина
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/profile");
                    }}
                    className="profile-button"
                  >
                    Профиль
                  </button>
                </li>
              </ul>
            </nav>
          </Col>

          <Col lg={3} className="search">
            <Search onSearch={onSearch} />
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
