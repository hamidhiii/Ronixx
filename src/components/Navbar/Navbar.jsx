import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Search as SearchIcon } from "lucide-react";
import logo from "../../assets/img/Variant.png";
import Menu from "../Menu/Menu";
import "./Navbar.scss";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ onSearch }) {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <nav className={`navbar ${isSearchOpen ? "search-open" : ""}`}>
      <Container>
        {isMobile ? (
          !isSearchOpen ? (
            <Row className="align-items-center navbar-content ">
              <Col className="d-flex align-items-center">
                <Link to="/">
                  <img src={logo} alt="Logo" className="logo" />
                </Link>
                <Menu />
              </Col>

              <div className="buttons" >
                {/* Search is completely removed in mobile */}
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </Row>
          ) : (
            <Row className="search-fullscreen">
              <Col>
                {/* Если хочешь оставить поиск в полноэкранном режиме по кнопке — раскомментируй ниже */}
                {/* <Search setIsSearchOpen={setIsSearchOpen} mobile={true} /> */}
              </Col>
            </Row>
          )
        ) : (
          <Row className="align-items-center">
            <Col className="logotip"  md={1}>
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
        )}
      </Container>
    </nav>
  );
}
