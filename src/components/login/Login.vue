<template>
    <div class="main_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login" :model="dataForm" :rules="rules" ref="loginForm">
                    <h1>Hello</h1>
                    <h3>欢迎来到管理后台</h3>
                    <el-form-item prop="account">
                        <el-input :prefix-icon="User" tyee="text" placeholder="请输入账号" v-model="dataForm.account" clearable />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码" v-model="dataForm.password" show-password />
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" @click="lg" :disabled="loading">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {User, Lock} from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import {login} from './js/login.js'

let dataForm = reactive({
    account:'',
    password:''
})

let loading = ref(false)

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

//获取路由器
let $route = useRouter();
let loginForm = ref()
function lg(){
    login(loginForm, "/", dataForm, loading, $route)
}
</script>

<style scoped lang="scss">
    .main_container{
        width: 100%;
        height: 100vh;
        background: url('@/assets/img/background.jpg') no-repeat;
        background-size: cover;

        .login{
            position:relative;
            width:80%;
            top:30vh;
            background: url('@/assets/img/login_background.png') no-repeat;
            background-size: cover;
            padding: 20px;

            .login_btn{
                width:100%;
            }
        }

        h1,h3{
            color:white;

        }
        h1{
            font-size: 40px;
        }
        h3{
            font-size: 20px;
        }
    }
</style>