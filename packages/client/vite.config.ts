import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  // 服务
  server: {
    proxy: {
      '/yh': {
        target: 'http://192.168.5.58:9050',
        changeOrigin: true
      },

      '/api/v4.0': {
        target: 'http://192.168.1.164:3000',
        changeOrigin: true
      }
    }
  },

  plugins: [babel(), tsconfigPaths(), react(), eslintPlugin()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
