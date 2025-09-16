// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  renderer: {
    plugins: [react()],
    server: {
      proxy: {
        '/api': 'http://localhost:5000'
      }
    }
  }
});
