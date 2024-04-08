//全局组件插件

import SvgIcon from './SvgIcon.vue'

export default {
    install(app){
        app.component('SvgIcon', SvgIcon)
    }
}