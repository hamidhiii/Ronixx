import React, { useState, useEffect } from "react";
import "./Profile.scss"; // Импортируем стили для страницы профиля
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  if (!user) {
    return <p>Загрузка...</p>; // Пока данные не загружены
  }

  // Проверяем, что emailOrPhone существует и является строкой
  const isEmail = user.emailOrPhone && user.emailOrPhone.includes("@");

  return (
    <div className="profile-info">
      <p><strong>Имя:</strong> {user.name || "Не указано"}</p>
      <p>
        <strong>
          {isEmail ? "Email" : "Телефон"}:
        </strong>{" "}
        {user.emailOrPhone || "Не указано"}
      </p>
      <p>
        <strong>Дата регистрации:</strong> {user.registeredAt || "Неизвестно"}
      </p>
      <p>
        <strong>Последний вход:</strong> {user.lastLogin || "Неизвестно"}
      </p>
      <p>
        <strong>Статус:</strong>{" "}
        <span className="status">
          📧 {user.emailConfirmed ? "Подтвержден" : "Не подтвержден"}
        </span>{" "}
        <button>Отправить код</button>
      </p>
    </div>
  );
};

export default Profile;
