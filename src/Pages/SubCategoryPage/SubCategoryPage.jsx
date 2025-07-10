import React from "react";
import { useParams } from "react-router-dom";
import DrilsHeader from "../../components/DrilsHeader/DrilsHeader";
import SubCategory from "../../components/SubCategory/SubCategory";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useGetSubCategoriesQuery } from "../../services/api/subcategoriesApi";
import { useTranslation } from "react-i18next";

export default function SubCategoryPage({ categories }) {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const category = categories.find(cat => cat.path === `/${slug}`);
  const { data: subcategories = [], isLoading, isError } = useGetSubCategoriesQuery();

  if (!category) return <div>Категория не найдена</div>;

  if (isLoading) {
    return (
      <div>
        <Skeleton height={40} width={300} style={{ marginBottom: '20px' }} />
        <Skeleton count={6} height={150} style={{ marginBottom: '10px' }} />
      </div>
    );
  }

  if (isError) return <div>Ошибка загрузки подкатегорий</div>;

  const filteredSubCategories = subcategories.filter(
    sub => sub.category === category.id
  );

  // Получаем перевод title и description
  const title =
    category.translations?.[currentLang]?.name ||
    category.translations?.ru?.name ||
    category.translations?.en?.name ||
    category.name ||
    "Без названия";

  const desc =
    category.translations?.[currentLang]?.description ||
    category.translations?.ru?.description ||
    category.translations?.en?.description ||
    category.description ||
    "";

  const headerData = [
    {
      id: category.id,
      title,
      desc,
      mainImage: category.main_image,
      translations: category.translations,
    },
  ];

  return (
    <div>
      <DrilsHeader data={headerData} />
      <SubCategory data={filteredSubCategories} />
    </div>
  );
}
