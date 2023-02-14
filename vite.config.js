import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: 'https://test-api-production-1830.up.railway.app/tops',
        changeOrigin: true,
        credentials: 'include',
        rewrite: (path) => path.replace('/^\/api/, ')
      }
    }
  },

  plugins: [react()],
})
