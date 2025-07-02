import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPasswordPage.scss';

export default function ForgotPasswordPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const navigate = useNavigate();

  const handleSendCode = () => {
    if (!emailOrPhone) return;
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(newCode);
    setCodeSent(true);
    alert(`Код: ${newCode}`);
  };

  const handleVerify = () => {
    if (code === generatedCode) {
      navigate("/login");
    } else {
      alert("Неверный код");
    }
  };

  return (
    <div className="forgot-password-page">
      <form className="forgot-password-form" onSubmit={(e) => e.preventDefault()}>
        <h1>Восстановление пароля</h1>
        <input
          type="text"
          placeholder="Email или номер"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        {!codeSent ? (
          <button onClick={handleSendCode}>Отправить код</button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Введите код"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleVerify}>Подтвердить</button>
          </>
        )}
      </form>
    </div>
  );
}
