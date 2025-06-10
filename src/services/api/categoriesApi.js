
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://139.59.62.159',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories/',
    }),
    getCategoryDetails: builder.query({
      query: (slug) => `/categories/${encodeURIComponent(slug)}/`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryDetailsQuery } = categoriesApi;
