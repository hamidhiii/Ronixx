import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import "./LoginPage.scss";

const loginSchema = z.object({
  emailOrPhone: z.string().min(3, "Введите email или номер"),
  password: z.string().min(6, "Пароль минимум 6 символов"),
});

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      loginSchema.parse({ emailOrPhone, password });

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.contact === emailOrPhone && u.password === passwordsh 
      );

    if (user) {
  localStorage.setItem("wasRegistered", "true");
  localStorage.setItem("currentUser", JSON.stringify(user)); // сохранение данных для профиля
  window.dispatchEvent(new Event("storage"));
  navigate("/"); // или /profile, если хочешь сразу туда


      } else {
        setError("Неверные данные для входа");
      }
    } catch (err) {
      setError(err.errors?.[0]?.message || "Ошибка");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Вход</h1>
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
        <div className="passwod">
          <Link className="forgot-password" to="/forgot-password">
            Забыли пароль?
          </Link>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Войти</button>
        <div className="register-link">
          <Link to="/register">Нет аккаунта? Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
}
