import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: Number(process.env.APP_PORT ?? '5173'),
    watch: {
      usePolling: true,
    },
    strictPort: true,
    hmr: {
      clientPort: Number(process.env.APP_PORT ?? '5173')
    },
  },
})
