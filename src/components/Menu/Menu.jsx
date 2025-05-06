import React from "react";
import "../Menu/Menu.scss";
import { menuLink } from "../../Constants/Index";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      {menuLink.map(({ id, LinkName, slug, path }) => (
        <li key={id}>
          <Link to={path}>{LinkName}</Link>
        </li>
      ))}
    </ul>
  );
}
