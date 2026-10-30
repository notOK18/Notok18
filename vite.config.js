import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://notok18.github.io/Notok18/
export default defineConfig({
  plugins: [react()],
  base: '/Notok18/',
})
