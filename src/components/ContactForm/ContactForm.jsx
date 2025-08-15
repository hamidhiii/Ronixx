import React, { useState } from 'react';
import './ContactForm.scss';
import InputField from '../InputField/InputField';
import { FORM_FIELDS, FORM_INITIAL_STATE, FORM_LABELS } from '../../Constants/Index';
import { useTranslation } from 'react-i18next';

// 🔐 Вставь сюда свой токен и chat_id
const TELEGRAM_TOKEN = '7874903404:AAG_neLdw8pvspXMRz6RS0pPA8ytvwXtBtg';
const CHAT_ID = '7807376355';

const ContactForm = () => {
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const { t } = useTranslation();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
📝 *${t('contactForm.newMessage')}*
———————————————
👤 *${t('contactForm.name')}:* ${formData.name || '-'}
📧 *${t('contactForm.email')}:* ${formData.email || '-'}
📱 *${t('contactForm.phone')}:* ${formData.phone || '-'}
💬 *${t('contactForm.message')}:* ${formData.message || '-'}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      const data = await res.json();
      if (data.ok) {
        alert(t('contactForm.success'));
        setFormData(FORM_INITIAL_STATE);
      } else {
        alert(t('contactForm.error'));
        console.error(data);
      }
    } catch (error) {
      alert(t('contactForm.connectionError'));
      console.error(error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>{t('contactForm.title')}</h2>
      <p>{t('contactForm.subtitle')}</p>

      <div className="form-grid">
        {FORM_FIELDS.map((field) => (
          <InputField
            key={field.name}
            {...field}
            label={t(`contactForm.${field.name}`)}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="message">{t('contactForm.message')}</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">
        {t('contactForm.submit')}
      </button>
    </form>
  );
};

export default ContactForm;
