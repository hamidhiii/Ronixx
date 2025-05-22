import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import BigDrel1 from "../assets/img/"; // замени путь на свой

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const initialTerm = query.get("q") || "";
  const [searchTerm] = useState(initialTerm);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/search", { replace: true });
  }, []);

  const products = [
    {
      id: 0,
      code: "8618N",
      hotSale: true,
      image: BigDrel1,
      name: "18V Cordless Drill Driver 10mm-35N.m",
      specs: ["Battery Chemistry: Lithium-İon", "Battery Voltage: DC 18V"],
    },
    // другие товары можно добавить тут
  ];

  const filtered = products.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.code.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <h2>Результаты поиска по запросу: "{searchTerm}"</h2>
      <ul>
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <li key={item.id}>
              {item.name} ({item.code})
            </li>
          ))
        ) : (
          <li>Ничего не найдено</li>
        )}
      </ul>
    </div>
  );
}
