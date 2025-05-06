import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileMenu.scss";
import { FaUserAlt } from "react-icons/fa";

export default function ProfileMenu({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-menu-wrapper" ref={menuRef}>
    <div className="profile-icon" onClick={() => setMenuOpen(!menuOpen)}>
      <span className="icons" role="img" aria-label="profile">  <FaUserAlt /></span>
    </div>
    {menuOpen && (
      <div className="profile-dropdown">
        <div onClick={() => navigate("/orders")}>🧾 Мои заказы</div>
        <div onClick={() => navigate("/applications")}>📬 Мои заявки</div>
        <div onClick={() => navigate("/profile")}>🧍‍♂️ Профиль</div>
        <div onClick={() => {
          onLogout();
          setMenuOpen(false);
        }}>🚪 Выйти</div>
      </div>
    )}
  </div>
  
  );
}
