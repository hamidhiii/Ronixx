import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subcategoriesApi = createApi({
  reducerPath: "subcategoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.ronix.uz/" }),
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: () => "subcategories/",
    }),
  }),
});

export const { useGetSubCategoriesQuery } = subcategoriesApi;
