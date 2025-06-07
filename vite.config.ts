import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // Proxy requests with a '/api' prefix to your express server
      '/api': {
        target: 'http://localhost:4000', // The address of your express server
        changeOrigin: true, // Recommended for virtual hosts
        // Optional: rewrite path if you don't want the /api prefix passed 
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
});
