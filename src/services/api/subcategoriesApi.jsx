import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subcategoriesApi = createApi({
  reducerPath: "subcategoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ronixtools.duckdns.org/" }),
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: () => "subcategories/",
    }),
  }),
});

export const { useGetSubCategoriesQuery } = subcategoriesApi;
