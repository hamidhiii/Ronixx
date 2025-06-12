import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subcategoriesApi = createApi({
  reducerPath: "subcategoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://139.59.62.159/" }),
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: () => "subcategories/",
    }),
  }),
});

export const { useGetSubCategoriesQuery } = subcategoriesApi;
