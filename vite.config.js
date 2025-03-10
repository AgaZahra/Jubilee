import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // path modulunu idxal edin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // src qovluğu üçün alias
      '@assets': path.resolve(__dirname, './src/assets'), // assets qovluğu üçün alias
      '@components': path.resolve(__dirname, './src/components'), // components qovluğu üçün alias
      '@shared': path.resolve(__dirname, './src/shared'), // shared qovluğu üçün alias
    },
  },
});