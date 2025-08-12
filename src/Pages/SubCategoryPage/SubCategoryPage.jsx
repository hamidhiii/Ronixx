import React from "react";
import { useParams } from "react-router-dom";
import DrilsHeader from "../../components/DrilsHeader/DrilsHeader";
import SubCategory from "../../components/SubCategory/SubCategory";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useGetSubCategoriesQuery } from "../../services/api/subcategoriesApi";
import { useGetCategoryDetailsQuery } from "../../services/api/categoriesApi";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://api.ronix.uz";

export default function SubCategoryPage({ categories }) {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  // Находим текущую категорию по slug
  const category = categories.find(cat => cat.path === `/${slug}`);

  // Запрос: детали категории (переводы, картинки и т.п.)
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetCategoryDetailsQuery(category?.name, {
    skip: !category?.name
  });

  // Запрос: все подкатегории
  const {
    data: subcategories = [],
    isLoading: subCategoriesLoading,
    isError: subCategoriesError,
  } = useGetSubCategoriesQuery();

  if (!category) return <div>Категория не найдена</div>;

  if (categoryLoading || !categoryData) {
    return (
      <div>
        <Skeleton height={200} />
        <Skeleton height={40} width={300} style={{ marginBottom: 20 }} />
        <Skeleton count={6} height={150} />
      </div>
    );
  }

  if (categoryError) return <div>Ошибка загрузки категории</div>;

  // Фильтрация подкатегорий по ID категории
  const filteredSubCategories = subcategories.filter(
    sub => sub.category === categoryData.id
  );

  // Подготовка данных для заголовка
  const headerData = [{
    id: categoryData.id,
    title: categoryData.name,
    desc: categoryData.description,
    mainImage: category.main_image,
    translations: categoryData.translations,
  }];

  return (
    <div>
      <DrilsHeader data={headerData} />
      <SubCategory data={filteredSubCategories} />
    </div>
  );
}
