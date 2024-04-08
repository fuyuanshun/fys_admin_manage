import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//矢量图
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
//mock
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({command})=>{
  return {
    plugins: [vue(),
    //矢量图
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    //mock
    viteMockServe({
      localEnabled : command === 'serve'
    })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // 其他别名
      },
    },
  }
})
