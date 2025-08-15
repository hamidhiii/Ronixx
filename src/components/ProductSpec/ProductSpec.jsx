import React from 'react';
import './ProductSpec.scss';
import { useTranslation } from 'react-i18next';

export default function ProductSpec({ specification }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const spec =
    specification?.translations?.[lang] ||
    specification?.translations?.ru ||
    specification?.translations?.en;

  if (!spec) {
    return <div>Нет данных о характеристиках</div>;
  }

  return (
    <div className="product-specs-table">
      <table>
        <tbody>
          {Object.entries(spec).map(([key, value]) => (
            <tr key={key}>
              <td className="spec-label">{key}</td>
              <td className="spec-value">{value || "Не указано"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
