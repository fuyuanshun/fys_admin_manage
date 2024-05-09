import router from '@/router/index.js'
import pinia from '@/store'
import useUserStore from '@/store/modules/useUserStore.js'

let store = useUserStore(pinia);


router.beforeEach((to, from, next)=>{
    let token = store.token;
    //未登录状态
    if(token === ''){
        if(to.path === '/login' || to.path === '/admin/login' || to.path === '/index'){
            next();
        } else {
            next({path:'/login', query:{redirect: to.path}})
        }
    //登录状态
    } else{
        if(to.path !== '/login'){
            if(to.path === '/home'){
                let role = store.role;
                //判断权限
                for(let r of role.split(",")){
                    if(r === 'ROLE_ADMIN'){
                        next();
                        return;
                    }
                }
                //循环结束表示没有对应的权限
                next({path: from.path})
            } else {
                next();
            }
        } else {
            next({path: from.path})
        }
    }
    
})