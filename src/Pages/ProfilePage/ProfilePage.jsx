import React, { useState, useEffect } from "react";
import "./ProfilePage.scss";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [codeSent, setCodeSent] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const sendConfirmationCode = () => {
    if (!user) return;

    // Генерация случайного кода
    const code = Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);

    // Здесь имитируем отправку кода. Для настоящего решения нужно подключить сервис.
    localStorage.setItem("confirmationCode", code);
    setCodeSent(true);

    // В реальном приложении: подключить API для отправки email или SMS
    console.log(`Отправлен код подтверждения: ${code}`);
  };

  if (!user) return <p>Загрузка...</p>;

  const isEmail = user.emailOrPhone?.includes("@");

  return (
    <div className="profile-info">
      <p><strong>Имя:</strong> {user.name || "Не указано"}</p>
      <p>
        <strong>{isEmail ? "Gmail" : "Phone"}:</strong> {user.emailOrPhone}
      </p>
      <p><strong>Дата регистрации:</strong> {user.registeredAt || "Неизвестно"}</p>
      <p><strong>Последний вход:</strong> {user.lastLogin || "Неизвестно"}</p>
      <p>
        <strong>Статус:</strong> <span className="status">📧 Не подтвержден</span>
        {codeSent ? (
          <p>Код подтверждения: {confirmationCode}</p>
        ) : (
          <button onClick={sendConfirmationCode}>Отправить код</button>
        )}
      </p>
    </div>
  );
}
