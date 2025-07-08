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

  return (
    <nav className={`navbar ${isSearchOpen ? "search-open" : ""}`}>
      <Container>
        {windowWidth <= 768 ? (
          !isSearchOpen ? (
            <Row className="align-items-center navbar-content">
              <Col className="d-flex align-items-center">
                <Link to="/">
                  <img src={logo} alt="Logo" className="logo" />
                </Link>
                <Menu />
              </Col>

              <Col className="d-flex align-items-center justify-content-end" md={5} style={{ marginTop: "-50px" }}
              >
                <SearchIcon
                  className="search-toggle-icon"
                  style={{ cursor: "pointer", marginLeft: "15px" }}
                  onClick={() => setIsSearchOpen(true)}
                />
                <ThemeToggle  />
                <LanguageSwitcher  />
                {/* <FaUser className="profile-icon" onClick={() => navigate("/profile")} /> */}
              </Col>
            </Row>
          ) : (
            <Row className="search-fullscreen">
              <Col>
                <Search setIsSearchOpen={setIsSearchOpen} mobile={true} />
              </Col>
            </Row>
          )
        ) : (
          <Row className="align-items-center">
            <Col lg="auto">
              <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
              </Link>
            </Col>

            <Col lg={3} className="menulist">
              <ul>
                <Menu />
              </ul>
            </Col>

            <Col lg={4} className="search">
              <Search onSearch={onSearch} />
            </Col>

            <Col lg={1} className="ThemeToggle">
              <ThemeToggle />
            </Col>

            <Col lg={1} className="LanguageSwitcher">
              <LanguageSwitcher />
            </Col>

            {/* <Col lg="auto" className="basket-icon-wrapper" style={{ position: "relative" }}>
              <Link to="/basket">
                <button>
                  <FaShoppingCart />
                  {itemsCount > 0 && (
                    <span className="cart-badge">{itemsCount}</span>
                  )}
                </button>
              </Link>
            </Col>

            <Col lg="auto" className="profile-col" style={{ position: "relative" }}>
              <button onClick={() => navigate("/profile")} className="profile-button">
                <FaUser className="profile-icon" />
              </button>
            </Col> */}
          </Row>
        )}
      </Container>
    </nav>
  );
}
