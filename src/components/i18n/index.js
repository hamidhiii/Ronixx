import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Переводы для узбекского и русского
const resources = {
    uz: {
      translation: {
        "Контакт и локация": "Aloqa va Joylashuv",
      }
    },
    ru: {
      translation: {
        "Aloqa va Joylashuv": "Контакт и локация",
      }
    }
  };
  
  i18n.use(initReactI18next)
  .init({
    resources,
    lng: "ru", // Язык по умолчанию
    interpolation: {
      escapeValue: false, // Не экранировать значения
    },
  });


export default i18n;
