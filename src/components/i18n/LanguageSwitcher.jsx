import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng); // Меняем язык
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleLanguageChange("ru")}>Русский</button>
      <button onClick={() => handleLanguageChange("uz")}>Ўзбекча</button>
    </div>
  );
}

export default LanguageSwitcher;
