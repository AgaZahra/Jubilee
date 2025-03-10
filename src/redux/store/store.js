import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../api/productApi';
import { authApi } from '../api/authApi';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer, // authApi reducer əlavə edildi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authApi.middleware), // authApi middleware əlavə edildi
});
