import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import "./ProfileMenu.scss";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-menu-wrapper" ref={menuRef}>
      <div
        className={`profile-icon ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <FaUser />
      </div>

      {open && (
        <div className="dropdown-menu">
          <ul>
            <li>🧾 Мои заказы</li>
            <li>📬 Мои заявки</li>
            <li>🧍‍♂️ Профиль</li>
            <li>🚪 Выйти</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
