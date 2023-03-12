import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss(),
    react(),
    viteMockServe()
  ],
  server: {
    host: '0.0.0.0', // 打开显示本地地址
    open: true, // 是否自动启动浏览器
    port: 5173, // 端口号
    // 代理解决跨域
    proxy: { // 本地开发环境通过代理实现跨域
      // 正则表达式写法
      '/api': {
        target: 'http://150.158.148.72:3000', // 后端服务实际地址
        changeOrigin: true, // 开启代理
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
