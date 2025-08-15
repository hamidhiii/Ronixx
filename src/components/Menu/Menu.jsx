import React from "react";
import { Link } from "react-router-dom";
import "../Menu/Menu.scss";
import { menuLink } from "../../Constants/Index";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();

  return (
    <ul>
      {menuLink.map(({ id, translationKey, path }) => (
        <li key={id}>
          <Link to={path}>{t(translationKey)}</Link>
        </li>
      ))}
    </ul>
  );
}
