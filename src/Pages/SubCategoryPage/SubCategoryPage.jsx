import React from "react";
import { useParams } from "react-router-dom";
import DrilsHeader from "../../components/DrilsHeader/DrilsHeader";
import SubCategory from "../../components/SubCategory/SubCategory";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetSubCategoriesQuery } from "../../services/api/subcategoriesApi";
import { useGetCategoryDetailsQuery } from "../../services/api/categoriesApi";
import { useTranslation } from "react-i18next";

export default function SubCategoryPage({ categories }) {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  // Находим категорию по slug (path)
  const category = categories.find(cat => cat.path === `/${slug}`);

  // Загружаем данные категории по её name (для перевода, описания и т.п.)
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetCategoryDetailsQuery(category?.name, {
    skip: !category?.name
  });

  // Загружаем все подкатегории
  const {
    data: subcategories = [],
    isLoading: subCategoriesLoading,
    isError: subCategoriesError,
  } = useGetSubCategoriesQuery();

  // Если категория не найдена
  if (!category) return <div>Категория не найдена</div>;

  // Скелетон загрузки
  if (categoryLoading || !categoryData) {
    return (
      <div>
        <Skeleton height={200} />
        <Skeleton height={40} width={300} style={{ marginBottom: 20 }} />
        <Skeleton count={6} height={150} />
      </div>
    );
  }

  // Ошибка при загрузке категории
  if (categoryError) return <div>Ошибка загрузки категории</div>;

  // Фильтруем подкатегории по ID текущей категории
  const filteredSubCategories = subcategories.filter(
    sub => sub.category === categoryData.id
  );

  // Формируем данные для DrilsHeader
  const headerData = [
    {
      id: categoryData.id,
      title: categoryData.name,
      desc: categoryData.description,
      mainImage: categoryData.main_image, // Берём из categories
      translations: categoryData.translations, // Из API
    }
  ];

  return (
    <div>
      <DrilsHeader data={headerData} />
      <SubCategory data={filteredSubCategories} />
    </div>
  );
}
