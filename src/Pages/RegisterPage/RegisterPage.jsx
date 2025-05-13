import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, contact, password, confirmPassword } = formData;

    if (!name || !contact || !password || !confirmPassword) {
      return setError("Пожалуйста, заполните все поля");
    }

    if (password !== confirmPassword) {
      return setError("Пароли не совпадают");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.contact === contact);

    if (userExists) {
      return setError("Пользователь уже зарегистрирован");
    }

    const newUser = {
      name,
      contact,
      password,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser)); // Сохраняем текущего пользователя
    localStorage.setItem("wasRegistered", "true");

    window.dispatchEvent(new Event("storage")); // Обновляем интерфейс

    navigate("/"); // Переход на главную страницу после регистрации
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Email или телефон"
          value={formData.contact}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Подтвердите пароль"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Зарегистрироваться</button>
        <div className="login-link">
          Уже есть аккаунт? <a href="/login">Войти</a>
        </div>
      </form>
    </div>
  );
}
