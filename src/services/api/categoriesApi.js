import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../Constants/constants';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories/',
    }),
    getCategoryDetails: builder.query({
      query: (name) => `/categories/${encodeURIComponent(name)}/`,
    }),
    
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryDetailsQuery,
} = categoriesApi;
