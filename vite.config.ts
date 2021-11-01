import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * 路径别名
   */
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },

  server: {
    // 0.0.0.0 将监听所有地址，包括局域网和公网地址
    host: '0.0.0.0',
    // 开发服务器端口
    port: 3000
  },

  plugins: [vue()]
})
