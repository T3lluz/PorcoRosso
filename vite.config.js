import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://skagesogsusans2027.com/ (custom domain, set by
// `public/CNAME`), so assets live at the root. See https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    // Vite ignores $PORT and always grabs 5173, which collides with a dev
    // server already running by hand. Honouring it lets a second server take an
    // assigned port instead.
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
