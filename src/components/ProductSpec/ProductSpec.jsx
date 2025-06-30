import React from 'react';
import './ProductSpec.scss';

export default function ProductSpec({ specification }) {
  const spec = specification?.translations?.en;

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
