import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { glideSourceStamping } from '@srivarsank/glide'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), glideSourceStamping()],
  server: {
    // Allow embedding this dev server in Glide's visual canvas iframe
    headers: {
      'X-Frame-Options': 'ALLOWALL',
      'Content-Security-Policy': "frame-ancestors *",
      'Access-Control-Allow-Origin': '*',
    },
  },
})

