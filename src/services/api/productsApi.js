import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ronixtools.duckdns.org" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/product/all/",
    }),
    getProductsBySubcategory: builder.query({
      query: (subcategoryPath) => `/product/${subcategoryPath}/`,
    }),
    getProductById: builder.query({
      query: (productName) => `/product/details/${encodeURIComponent(productName)}/`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsBySubcategoryQuery,
  useGetProductByIdQuery,
} = productsApi;
