import React from "react";
import "./InstagramCard.scss";
import { INSTAGRAM_CARD } from "../../Constants/Index";
import { useTranslation } from "react-i18next";

const InstagramCard = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="insta-card">
        <img
          src={INSTAGRAM_CARD.icon}
          alt="Instagram"
          className="insta-card__icon"
        />
        <h2 className="insta-card__title">{INSTAGRAM_CARD.title}</h2>
        <a
          href="https://instagram.com/твоя_страница"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="insta-card__btn">
          {t("instagramCard.buttonText")}
          </button>
        </a>
      </div>

      <div className="formcontac">
        <h3>{t("instagramCard.phoneNumbers")}:</h3>

        <a href="tel:+998909449095" className="phone-link">
          +998 (90)-944-90-95
          <button>{t("instagramCard.callButton")}</button>
        </a>

        <a href="tel:+998903223395" className="phone-link">
          +998 (90)-322-33-95
          <button>{t("instagramCard.callButton")}</button>
        </a>

        <h1>RONIX.uz</h1>
      </div>
    </div>
  );
};

export default InstagramCard;
