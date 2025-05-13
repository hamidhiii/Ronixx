import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./LanguageSwitcher.scss";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setIsDropdownOpen(false); // Закрыть меню после выбора языка
  };

  return (
    <div
      className="language-switcher"
      onMouseEnter={() => setIsDropdownOpen(true)} // Открываем меню при наведении
      onMouseLeave={() => setIsDropdownOpen(false)} // Закрываем меню при уходе курсора
    >
      <div className="language-selector">
        <span className="selected-language">{currentLanguage.toUpperCase()}</span>
        <span className="arrow">▼</span>
      </div>

      {isDropdownOpen && (
        <div className="language-dropdown">
          <button onClick={() => handleLanguageChange("ru")}>RU</button>
          <button onClick={() => handleLanguageChange("uz")}>UZ</button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
