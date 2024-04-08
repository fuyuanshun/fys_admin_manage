//axios调用接口封装
import axios from 'axios'
//获取token
import useUserStore from '@/store/modules/useUserStore.js'

const request = axios.create({
    baseURL: 'http://localhost',
    // baseURL: 'http://www.fysfys.site',
    timeout: 5000
})

//请求拦截器，如果token存在则在除了登录接口外的所有请求头加上token
request.interceptors.request.use((config)=>{
    let userStore = useUserStore();
    if(userStore.token && config.url != '/user/login'){
        config.headers.set("token", userStore.token);
    }
    return config;
})

//响应拦截器
request.interceptors.response.use((response)=>{
    return response.data
    //失败回调
}, (error)=>{
})

export default request;