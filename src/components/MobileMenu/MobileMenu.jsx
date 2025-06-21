import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Search from "../Search/Search";
import "./MobileMenu.scss";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { BiX } from "react-icons/bi";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MobileMenu({ onSearch }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const navigate = useNavigate();

  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  const handleUserClick = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      navigate("/profile");
    } else {
      const wasRegistered = localStorage.getItem("wasRegistered") === "true";
      navigate(wasRegistered ? "/login" : "/register");
    }
  };

  return (
    <>
      <button className="burger" onClick={toggleShow}>
        {show ? <BiX size={28} /> : <HiMiniBars3CenterLeft size={28} />}
      </button>

      <Offcanvas show={show} onHide={toggleShow} placement="end">
        <Offcanvas.Body className="bodyy">
          <div clasтоьлбдщзsName="mobile-menu-content">
            <Search onSearch={onSearch}/>
            <div className="menu-icons">
              <button className="menu-icon" onClick={handleUserClick}>
                <FaUser />
              </button>
              <button className="menu-icon" onClick={() => navigate("/basket")}>
                <FaShoppingCart />
                {itemsCount > 0 && (
                  <span className="cart-badge">{itemsCount}</span>
                )}
              </button>
            </div>
            <div className="mobile-menu">
              <Menu />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
