
import useUserStore from '@/store/modules/useUserStore.js'
import {ElNotification} from 'element-plus'

export function login(loginForm, dir, dataForm, loading, $route){
    //获取vuex的store
    let store = useUserStore();

    let formValidate = loginForm.value.validate()
    //表单规则校验通过才发请求
    formValidate.then(()=>{
        loading.value = true
        store.userLogin(dataForm).then(()=>{
            //跳转到主页
            $route.push(dir)
            //提示信息
            ElNotification({
                type: 'success',
                message: '欢迎回来~',
                title: `Hi!${getHour()}好`,
            })
            loading.value = false   
        //
        }).catch((err)=>{
            console.log(err)
            loading.value = false   
            ElNotification({
                type: 'error',
                message: err
            })
        })
    //表单规则校验未通过
    }).catch((e)=>{
        console.log(e)
        console.log("表单校验未通过")
    })
}

function getHour(){
    let message = ''
    let hour = new Date().getHours();
    if(hour <= 9){
        message = '早上'
    } else if(hour <= 12){
        message = '上午'
    } else if(hour <= 18){
        message = '下午'
    } else if(hour <= 22){
        message = '晚上'
    } else if(hour <= 24 && hour <= 5){
        message = '深夜'
    }
    return message;
}