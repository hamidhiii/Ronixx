import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import "./RegisterPage.scss";

const registerSchema = z.object({
  emailOrPhone: z.string().min(3, "Введите email или номер"),
  password: z.string().min(6, "Пароль минимум 6 символов"),
  confirmPassword: z.string().min(6, "Повторите пароль"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      registerSchema.parse({ emailOrPhone, password, confirmPassword });

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const newUser = {
        emailOrPhone,
        password,
        name: "", // Можно добавить поле для имени
        emailConfirmed: false, // Нужно будет подтверждать email
        registeredAt: new Date().toLocaleString(),
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser)); // ✅ автоматический вход
      window.dispatchEvent(new Event("storage")); // уведомляем Navbar

      navigate("/profile"); // переход на профиль после регистрации
    } catch (err) {
      setError(err.errors?.[0]?.message || "Ошибка");
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <input
          type="text"
          placeholder="Email или номер"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
