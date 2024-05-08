<template>
    <div class="login-container">
        <div class="login">
            <el-form  :model="dataForm" class="login-form" :rules="rules" ref="loginForm">
                <input type="text" placeholder="请输入账号" v-model="dataForm.account">
                <input type="password" placeholder="请输入密码" v-model="dataForm.password">
                <button @click="this_login">登录</button>
            </el-form>
        </div>
        <!-- <div class="register">
            <span>还没有账号？点击免费</span>
            <a href="#">注册</a>
        </div> -->
    </div>
</template>
<script setup>
    import { login } from './js/login';
    import {reactive, ref} from 'vue'
    import {useRouter} from 'vue-router'

    let rules = {
        account : [
            {required:true, message:'用户名不允许为空', trigger: 'blur'},
            {min:6, max:20, message:'用户名为6-20位', trigger: 'blur'}
        ],
        password : [
            {required:true, message:'密码不允许为空', trigger: 'blur'},
            {min:6, max:20, message:'密码为6-20位', trigger: 'blur'}
        ]
    }

    let dataForm = reactive({
        account:'',
        password:''
    })
    let loading = ref(false)
    let loginForm = ref()

    let $route = useRouter();

    function this_login(){
        login(loginForm, "/note/index", dataForm, loading, $route)
    }
</script>
<style scoped lang='scss'>
    .login-container {
        height: 100vh;
        background-image: url('@/assets/img/userlogin_bg.jpg');
        // background-image: linear-gradient(45deg, skyblue, rgb(71, 109, 124),rgb(61, 61, 156), rgb(54, 97, 114));
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        .login {
            width: 400px;
            height: 200px;
            border: 1px solid white;
            box-shadow: 0px 0px 1px skyblue;

            
            .login-form {
                height: 100%;
                display:  flex;
                flex-direction: column;
                // background-color: skyblue;
                background-image: linear-gradient(to right bottom, rgb(135, 206, 235, 0.5), rgba(69, 168, 207, 0.5), rgba(10, 98, 133, 0.5));
                
                justify-content: center;
                align-items: center;
            }

            input {
                width: 80%;
                height: 20px;
                margin-bottom: 10px;
            }

            button {
                color: white;
                width: 40%;
                height: 25px;
                vertical-align: center;
                background-color: rgb(62, 209, 235, 0.8);
            }
        }
    }
</style>