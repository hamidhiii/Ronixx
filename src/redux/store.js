import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';    
import searchReducer from './searchSlice'; 
import { categoriesApi } from '../services/api/categoriesApi';
import { subcategoriesApi } from '../services/api/subcategoriesApi';
import { productsApi } from '../services/api/productsApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [subcategoriesApi.reducerPath]: subcategoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      subcategoriesApi.middleware,
      productsApi.middleware // ✅ ОБЯЗАТЕЛЬНО
    ),

});