import React, { useEffect, useState, useRef } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../assets/img/Variant.png";
import Menu from "../Menu/Menu";
import "./Navbar.scss";
import "../../components/i18n/LanguageSwitcher.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Search from "../Search/Search";


export default function Navbar({ onSearch }) {
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const profileButtonRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(storedUser);

    const handleStorage = () => {
      const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(updatedUser);
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleUserClick = () => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      navigate("/profile");
    } else {
      const wasRegistered = localStorage.getItem("wasRegistered") === "true";
      navigate(wasRegistered ? "/login" : "/register");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

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
            <ul>
              <Menu />
            </ul>
          </Col>

        <Col xs={12} sm={8} md={6} lg={3} className="search">
  <Search onSearch={onSearch} />
</Col>



          <Col lg="auto" className="ThemeToggle">
            <ThemeToggle />
          </Col>

          <Col lg="auto" className="LanguageSwitcher">
            <LanguageSwitcher />
          </Col>

         

          {/* <Col xs="auto" className="d-lg-none">
            <MobileMenu onSearch={onSearch} />
          </Col>

          <Col
            lg="auto"
            className="basket-icon-wrapper"
            style={{ position: "relative" }}
          >
            <Link to="/basket">
              <button>
                <FaShoppingCart />
                {itemsCount > 0 && (
                  <span className="cart-badge">{itemsCount}</span>
                )}
              </button>
            </Link>
          </Col> */}

          {/* <Col 
            lg="auto"
            className="profile-col"
            style={{ position: "relative" }}
          >
            <button
              ref={profileButtonRef}
              onClick={handleUserClick}
              className="profile-button"
            >
              <FaUser className="profile-icon" />
            </button>
          </Col> */}
        </Row>
      </Container>
    </nav>
  );
}
