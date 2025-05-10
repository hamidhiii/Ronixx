import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../../assets/img/Variant.png';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import './Navbar.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';


export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(storedUser);
  }, []);

  const handleUserClick = () => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUser) {
      setMenuOpen(!menuOpen); // открыть/закрыть меню профиля
    } else {
      // если юзер не зарегистрирован — перекидываем либо на login, либо на register
      const wasRegistered = localStorage.getItem('wasRegistered') === 'true';
      navigate(wasRegistered ? '/login' : '/register');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setMenuOpen(false);
    navigate('/');
  };

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

          <Col lg={3} className="search">
            <Search />
          </Col>

          <Col lg="auto">
            <ThemeToggle />
          </Col>

          <Col lg="auto">
            <Link to="/basket">
              <button>
                <FaShoppingCart />
              </button>
            </Link>
          </Col>

          <Col lg="auto" className="profile-col">
            <div className="profile-icon-wrapper" onClick={handleUserClick}>
              <FaUser className="profile-icon" />
              {menuOpen && currentUser && (
                <div className="profile-menu">
                  <Link to="/orders">🧾 Мои заказы</Link>
                  <Link to="/profile">🧍‍♂️ Профиль</Link>
                  <button onClick={handleLogout}>🚪 Выйти</button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
