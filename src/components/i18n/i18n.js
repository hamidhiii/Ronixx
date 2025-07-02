import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru/translation.json';
import uzTranslation from './locales/uz/translation.json';

const resources = {
  ru: { translation: ruTranslation },
  uz: { translation: uzTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
