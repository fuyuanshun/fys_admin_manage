import { createApp } from 'vue'
import App from './App.vue'


//element-ui
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
//矢量图
import 'virtual:svg-icons-register'
//全局组件插件
import globalComponent from './components/index.js'
import router from './router/index.js'
//pinia
import pinia from '@/store/'
//路由鉴权
import './permisstion.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

//路由
app.use(router)
//应用element-ui插件
app.use(ElementPlus, {locale:zhCn})
//应用全局组件插件
app.use(globalComponent)

app.use(pinia)
//注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')