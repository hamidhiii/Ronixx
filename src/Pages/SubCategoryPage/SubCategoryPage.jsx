import React from "react";
import { useParams } from "react-router-dom";
import DrilsHeader from "../../components/DrilsHeader/DrilsHeader";
import SubCategory from "../../components/SubCategory/SubCategory";
import { useGetSubCategoriesQuery } from "../../services/api/subcategoriesApi";

export default function SubCategoryPage({ categories }) {
  const { slug } = useParams();

  const category = categories.find(cat => cat.path === `/${slug}`);
  const { data: subcategories = [], isLoading, isError } = useGetSubCategoriesQuery();

  if (!category) return <div>Категория не найдена</div>;
  if (isLoading) return <div>Загрузка подкатегорий...</div>;
  if (isError) return <div>Ошибка загрузки подкатегорий</div>;

  const filteredSubCategories = subcategories.filter(
    sub => sub.category === category.id
  );

  const headerData = [
    {
      id: category.id,
      title: category.name,
      desc: category.description,
      mainImage: category.main_image,
    },
  ];

  return (
    <div>
      <DrilsHeader data={headerData} />
      <SubCategory data={filteredSubCategories} />
    </div>
  );
}
