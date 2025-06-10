import React from "react";
import { useParams } from "react-router-dom";
import DrilsHeader from "../../components/DrilsHeader/DrilsHeader";
import SubCategory from "../../components/SubCategory/SubCategory";

export default function SubCategoryPage({ categories }) {
  const { slug } = useParams();

  // Найди категорию по path (например: "/jacks")
  const category = categories.find(cat => cat.path === `/${slug}`);

  if (!category) return <div>Категория не найдена</div>;

  const headerData = [{
    id: category.id,
    title: category.name,
    desc: category.description,
    mainImage: category.main_image
  }];

  return (
    <div>
      <DrilsHeader data={headerData} />
      <SubCategory data={category.subcategories || []} />
    </div>
  );
}
