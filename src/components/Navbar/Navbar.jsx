import React, { useEffect, useState, useRef } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../assets/img/Variant.png";
import Menu from "../Menu/Menu";

import "./Navbar.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../i18n/LanguageSwitcher"; // Импортируем твой компонент
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import { useSelector } from "react-redux";
import Search from "../Search/Search";


export default function Navbar(onSearch ) {
  const { t } = useTranslation(); // Используем хук useTranslation
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Ссылки на элементы
  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(storedUser);

    const handleStorage = () => {
      const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(updatedUser);
    };

    window.addEventListener("storage", handleStorage);

    // Закрываем меню при клике вне его
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("storage", handleStorage);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleUserClick = () => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (storedUser) {
      setMenuOpen(!menuOpen);
    } else {
      const wasRegistered = localStorage.getItem("wasRegistered") === "true";
      navigate(wasRegistered ? "/login" : "/register");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setMenuOpen(false);
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
            <ul >
              
              <Menu/>
            </ul>
          </Col>

          <Col lg={3} className="search">
            <Search onSearch={onSearch} />
          </Col>

          <Col lg="auto">
            <ThemeToggle />
          </Col>
          
          <Col lg="auto">
            {/* Используем твой компонент LanguageSwitcher */}
            <LanguageSwitcher />
          </Col>

          <Col lg="auto" className="basket-icon-wrapper" style={{ position: "relative" }}>
  <Link to="/basket">
    <button>
      <FaShoppingCart />
      {itemsCount > 0 && (
        <span className="cart-badge">{itemsCount}</span>
      )}
    </button>
  </Link>
</Col>

          <Col
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

            {currentUser && menuOpen && (
              <div ref={profileMenuRef} className="dropdown-menu-profile">
                <Link to="/orders" onClick={() => setMenuOpen(false)}>
                  🧾 {t("orders")}
                </Link>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  🧍‍♂️ {t("profile")}
                </Link>
                <button onClick={handleLogout}>🚪 {t("logout")}</button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
