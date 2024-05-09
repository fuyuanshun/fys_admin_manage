<template>
    <div class="login-container bgi_default" id="login-container">
        <div class="login">
            <el-form  :model="dataForm" class="login-form" :rules="rules" ref="loginForm">
                <el-form-item prop="account">
                    <el-input type="text" placeholder="请输入账号" v-model="dataForm.account" class="input"/>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="dataForm.password" @focus="change_bg" @focusout="change_bg" class="input" show-password/>
                </el-form-item>
                <el-button @click="this_login">登录</el-button>
                <div class="black">

                </div>
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

    function change_bg(){
        let el = document.getElementById("login-container");
        if(el.classList.contains("bgi_default")){
            el.classList.remove("bgi_default");
            el.classList.add("bgi_01");
        } else {
            el.classList.remove("bgi_01");
            el.classList.add("bgi_default");
        }
        
    }
</script>
<style scoped lang='scss'>
    .bgi_default {
        background-image: url('@/assets/img/userlogin_bg.jpg');
    }
    .bgi_01 {
        background-color: black;
        // background-image: url('@/assets/img/eays.jpg');
        // background-repeat: no-repeat;
        // background-size: cover;
    }
    .login-container {
        height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        .login {
            width: 400px;
            height: 200px;
            border: 1px solid white;
            box-shadow: 0px 0px 1px skyblue;
            border-radius: 25px;
            overflow: hidden;
            
            .login-form {
                height: 200px;
                width: 400px;
                display:  flex;
                flex-direction: column;
                background-color: antiquewhite;
                justify-content: center;
                align-items: center;
            }

            .input {
                width: 214px;
            }
        }
    }
</style>