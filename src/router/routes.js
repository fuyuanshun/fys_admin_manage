import Login from '@/components/login/Login.vue'
import NotFound from '@/components/404/NotFound.vue'
import Layout from '@/components/layout/Layout.vue'
import Screen from '@/components/screen/Screen.vue'
import Home from '@/components/home/Home.vue'

//路由常量
export const constantRoute = [
    {
        path:'/login',
        component:Login,
        name:'login',
        meta:{
            title:'登录',
            hidden:true
        }
    },
    {
        path:'/',
        component:Layout,
        name:'Layout',
        meta:{
            title:'主页',
            icon: 'House'
        },
        redirect: '/home',
        children:[
            {
                path:'/home',
                component :Home,
                name:'Home',
                meta:{
                    title:'首页',
                    hidden: true,
                    icon: 'House'
                }
            }
        ]
    },
    {
        path:'/screen',
        component:Screen,
        name:'Screen',
        meta:{
            title:'数据大屏',
            icon: 'Discount'
        }
    },
    {
        path:'/acl',
        component: ()=> import('@/components/layout/Layout.vue'),
        name:'Acl',
        meta:{
            title:'权限管理',
            icon: 'Lock'
        },
        redirect: '/user',
        children:[
            {
                path:'/user',
                component : ()=>import ('@/components/acl/UserManager.vue'),
                name:'User',
                meta:{
                    title:'用户管理',
                    icon: 'User'
                }
            },
            {
                path:'/role',
                component :()=>import ('@/components/acl/RoleManager.vue'),
                name:'Role',
                meta:{
                    title:'角色管理',
                    icon: 'User'
                }
            }
        ]
    },
    {
        path:'/404',
        component:NotFound,
        name:'Notfound',
        meta:{
            title:'404',
            hidden:true
        }
    }
]