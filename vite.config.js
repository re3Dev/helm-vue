import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  plugins: [vue()],
  server: {
    port: 8081, // Vue's development server port
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // Flask backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes `/api` prefix
      },
    },
  },
});



  