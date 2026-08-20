import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /urban-flood-risk-dashboard/.
export default defineConfig({
  base: '/urban-flood-risk-dashboard/',
  plugins: [react()],
})
