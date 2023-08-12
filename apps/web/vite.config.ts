import linaria from '@linaria/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), linaria(), tsconfigPaths()],
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
})
