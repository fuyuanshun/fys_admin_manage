import {createRouter, createWebHashHistory} from 'vue-router'
import {constantRoute} from './routes.js'

export default createRouter({
    history:createWebHashHistory(),
    routes: constantRoute
})