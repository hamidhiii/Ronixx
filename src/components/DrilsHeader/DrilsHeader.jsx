// DrilsHeader.jsx - исправленная версия
import React, { useEffect } from 'react';
import './DrilsHeader.scss';
import { Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function DrilsHeader({ data }) {
  const { i18n } = useTranslation();
  
  // Добавляем проверку на существование data
  if (!data || data.length === 0) {
    console.log('DrilsHeader: No data provided');
    return <div>Загрузка...</div>;
  }
  
  const { id, title, desc, mainImage, translations } = data[0];
  
  // Отладочная информация
  // console.log('DrilsHeader full data:', data[0]);
  // console.log('Translations from data:', translations);
  // console.log('Current language:', i18n.language);

  // Принудительно перерендерим компонент при смене языка
  useEffect(() => {
    const handleLanguageChange = () => {
      // Этот useEffect заставит компонент обновиться
      console.log('Language changed in DrilsHeader to:', i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  console.log('DrilsHeader render:', {
    currentLanguage: i18n.language,
    translations: translations,
    dataLength: data?.length
  });

  // Получаем переводы с улучшенной логикой
  const getTranslatedText = (field) => {
    if (!translations) {
      console.log('No translations available');
      return field === 'name' ? title : desc;
    }

    const currentLangTranslation = translations[i18n.language]?.[field];
    const ruTranslation = translations['ru']?.[field];
    const fallbackText = field === 'name' ? title : desc;

    const result = currentLangTranslation || ruTranslation || fallbackText;
    
    console.log(`${field} translation:`, {
      currentLang: i18n.language,
      currentLangTranslation,
      ruTranslation,
      result
    });

    return result;
  };

  const translatedTitle = getTranslatedText('name');
  const translatedDesc = getTranslatedText('description');

  return (
    <section>
      <div className="position-relative">
        <img
          src={mainImage ? `https://ronixtools.duckdns.org${mainImage}` : ''}
          alt={translatedTitle}
          className="headerfotos"
        />
      </div>

      <Container key={`${id}-${i18n.language}`}>
        <Col lg={10} className="text-center">
          <h1>{translatedTitle}</h1>
          <p>{translatedDesc}</p>
        </Col>
      </Container>
    </section>
  );
}