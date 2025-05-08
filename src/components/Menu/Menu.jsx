import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Menu/Menu.scss";
import { menuLink } from "../../Constants/Index";

export default function Menu() {
  const { t } = useTranslation(); // добавляем функцию перевода

  return (
    <ul>
      {menuLink.map(({ id, LinkName, slug, path }) => (
        <li key={id}>
          <Link to={path}>{t(LinkName)}</Link> {/* Используем t() для перевода */}
        </li>
      ))}
    </ul>
  );
}
