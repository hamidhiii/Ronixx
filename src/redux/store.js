import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';    
import searchReducer from './searchSlice'; 
import { categoriesApi } from '../services/api/categoriesApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

