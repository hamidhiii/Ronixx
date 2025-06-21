
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ronixtools.duckdns.org',
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
