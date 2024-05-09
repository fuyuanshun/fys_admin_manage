import {constantRoute} from '@/router/routes.js'
import {defineStore} from 'pinia'
import Cookies from 'js-cookie'
import {reqUserLogin, reqgetUserInfo} from '@/api/user/index.js'

export default defineStore('useUserStore', {
    actions:{
        //登录
        async userLogin(dataForm){
            let {account, password} = dataForm;
            //发起请求
            let resp = await reqUserLogin({account, password})

            if(resp && resp.code === 200){
                this.token = resp.data;
                //cookie 一天过期
                Cookies.set('token', this.token, {expires:1});
                return resp.msg;
            } else {
                if(resp){
                    return Promise.reject(new Error(resp.msg))
                } else{
                    return Promise.reject(new Error("网络错误"))
                }
            }
        },

        async getUserInfo(){
            let resp = await reqgetUserInfo()

            if(resp && resp.code === 200){
                let data = resp.data
                this.username = data.username
                this.avatar = data.avatar
                this.role = data.role
            } else {
                if(resp){
                    return Promise.reject(new Error(resp.msg))
                } else{
                    return Promise.reject(new Error("网络错误"))
                }
            }
        },
        clearnToken(){
            this.token = ''
            //清除cookie
            Cookies.remove("token");
        }
    },
    state:()=>{
        return {
            //没有token时默认为空
            token : Cookies.get('token') || '',
            username: '',
            avatar: '',
            menuList: constantRoute,
            role: ''
        }
    },
    getters:{

    }
})