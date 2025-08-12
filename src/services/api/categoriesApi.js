import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../Constants/constants";


export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getCategoryBySlug: builder.query({
      query: (slug) => `/categories/${slug}/`,
    }),
    getCategoryDetails: builder.query({
      query: (name) => `/categories/${name}/`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery,
  useGetCategoryDetailsQuery
} = categoriesApi;
