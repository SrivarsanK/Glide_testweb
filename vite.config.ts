import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { glideSourceStamping } from '@srivarsank/glide'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), glideSourceStamping()],
})
