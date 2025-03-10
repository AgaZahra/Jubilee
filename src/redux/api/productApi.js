import { createApi } from '@reduxjs/toolkit/query/react';
import { supabase } from '../api/supabase/supabaseClient';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: async ({ table, method = 'select', body, id }) => {
      try {
        let data = [];
        let error = null;
  
        if (method === 'select') {
          const response = await supabase.from(table).select('*');
          data = response.data || [];
          error = response.error;
        } else if (method === 'insert') {
          const response = await supabase.from(table).insert([body]);
          data = response.data || [];
          error = response.error;
        } else if (method === 'delete') {
          const response = await supabase.from(table).delete().eq('id', id);
          data = response.data || [];
          error = response.error;
        }
  
        if (error) throw error;
        return { data };
      } catch (error) {
        console.error("Supabase Error:", error.message);
        return { error };
      }
    },
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => ({ table: 'jubilee-products', method: 'select' }),
      }),
      addProduct: builder.mutation({
        query: (newProduct) => ({
          table: 'jubliee-products',
          method: 'insert',
          body: newProduct,
        }),
      }),
      deleteProduct: builder.mutation({
        query: (id) => ({
          table: 'jubilee-products',
          method: 'delete',
          id: id,
        }),
      }),
    }),
  });
  
export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;