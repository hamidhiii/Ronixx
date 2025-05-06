import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/Variant.png";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import "./Navbar.scss";
import { Col, Container, Row } from "react-bootstrap";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("currentUser")
  );
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    const handleStorageChange = () => {
      const user = localStorage.getItem("currentUser");
      setIsAuthenticated(!!user);
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
  };

  const handleProfileClick = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      // ничего не делаем, так как меню должно отобразиться
    } else {
      navigate("/login");
    }
  };

  return (
    <nav>
      <Container>
        <Row>
          <Col lg={"auto"}>
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="logo" />
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
          <Col lg={"auto"}>
            <Link to="/basket">
              <button>
                <FaShoppingCart />
              </button>
            </Link>
            {isAuthenticated ? (
              <ProfileMenu onLogout={handleLogout} />
            ) : (
              <button className="icons" onClick={handleProfileClick}>
                <FaUserAlt />
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
