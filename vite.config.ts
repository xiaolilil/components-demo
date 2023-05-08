import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 主要用于alias文件路径别名
// mock
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import reactRefresh from '@vitejs/plugin-react-refresh'
// cdn 导入第三方插件
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

// gzip压缩
import viteCompression from 'vite-plugin-compression'

// 图片压缩
// import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),

    // importToCDN({
    //   modules: [
    //     {
    //       name: 'vue',
    //       var: 'Vue',
    //       path: 'https://unpkg.com/vue@next',
    //     },
    // {
    //       name: 'vue-demi',
    //       var: 'VueDemi',
    //       path: 'lib/index.iife.min.js',
    //     },
    //     {
    //       name: 'element-plus',
    //       var: 'ElementPlus',
    //       path: 'https://unpkg.com/element-plus',
    //       css: 'https://unpkg.com/element-plus/dist/index.css',
    //     },
    //   ],
    // }),
    viteMockServe({
      mockPath: 'mock',
      // localEnabled: command ====
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    WindiCSS(),
    // gzip 压缩
    viteCompression(),
  ],

  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, './src'),
      '@img': './src/assets',
    },
  },

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
