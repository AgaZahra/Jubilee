import { createApi } from '@reduxjs/toolkit/query/react';
import { supabase } from '../api/supabase/supabaseClient'; 
import Swal from 'sweetalert2';

export const authApi = createApi({
  reducerPath: 'authApi',
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        async queryFn({ name, email, password }) {
          try {
            const { data, error: selectError } = await supabase.from('jubilee-auth').select('email');
            if (selectError) {
              Swal.fire({ title: "Error checking users", icon: "error" });
              console.error(selectError);
              return { error: selectError.message };
            }
      
            if (data.some((user) => user.email === email)) {
              Swal.fire({ title: "Email already registered!", icon: "error" });
              return { error: "Email already registered" };
            }
      
            const { error: insertError } = await supabase.from('jubilee-auth').insert({
              name, 
              email,
              password,
              created_at: new Date().toISOString(),
            });
      
            if (insertError) {
              Swal.fire({ title: "Error creating user", icon: "error" });
              console.error(insertError);
              return { error: insertError.message };
            }
      
            Swal.fire({ title: "Account created!", icon: "success" });
      
            setTimeout(() => {
              window.location.assign("/login");
            }, 2000);
            return { data: 'User registered successfully' };
      
          } catch (error) {
            Swal.fire({ title: "Something went wrong!", icon: "error" });
            console.error(error);
            return { error: error.message };
          }
        },
      }),
      
    loginUser: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const { data, error: selectError } = await supabase.from('jubilee-auth').select();
          if (selectError) throw selectError;

          const user = data.find((user) => user.email === email);
          if (!user || user.password !== password) {
            Swal.fire({ title: "Email or password is wrong!", icon: "error" });
            return { error: "Invalid credentials" };
          }

          Swal.fire({ title: "Login successful!", icon: "success" });

          setTimeout(() => {
            window.location.assign('/');
          }, 2000);
          
          localStorage.setItem('name', user.name); 
          
          return { data: 'Login successful' };
        } catch (error) {
          Swal.fire({ title: "Something went wrong!", icon: "error" });
          console.error(error);
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
