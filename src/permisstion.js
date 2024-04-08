import router from '@/router/index.js'
import pinia from '@/store'
import useUserStore from '@/store/modules/useUserStore.js'

let store = useUserStore(pinia);


router.beforeEach((to, from, next)=>{
    let token = store.token;
    //未登录状态
    if(token === ''){
        if(to.path === '/login'){
            next();
        } else {
            next({path:'/login', query:{redirect: to.path}})
        }
    //登录状态
    } else{
        if(to.path !== '/login'){
            next();
        } else {
            next({path: from.path})
        }
    }
    
})