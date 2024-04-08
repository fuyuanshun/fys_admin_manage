<template>
    <div class="topbar">
        <div class="topbar_left">
            <!-- 收起与展示图标 -->
            <el-icon style="margin-right:10px;" @click="store.changeFold()">
                <component :is="store.fold ? 'Expand' : 'Fold'"></component>
            </el-icon>
            <!-- 面包屑 -->
            <el-breadcrumb separator-icon="ArrowRight">
                <template v-for="m in $route.matched">
                    <!-- 主页的第一级隐藏 -->
                    <el-breadcrumb-item v-show="m.path !== '/'" :to="{ path: m.path }">{{ m.meta.title }}</el-breadcrumb-item>
                </template>
                <!-- <el-breadcrumb-item>权限管理</el-breadcrumb-item> -->
            </el-breadcrumb>
        </div>
        <div class="topbar_right">
            <el-button icon="Refresh" size="small" circle @click="store.changeRefresh()" />
            <el-button icon="FullScreen" size="small" circle @click="fullScreen()" />
            <el-button icon="Setting" size="small" circle />

            <img :src="userStore.avatar" circle style="width:24px; height:24px; margin:0px 12px; border-radius:50%;">
            <!-- 下拉菜单 -->
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{ userStore.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar'
}
</script>
<script setup>
import useLayoutSettingStore from '@/store/modules/useLayoutSettingStore.js'
import useUserStore from '@/store/modules/useUserStore.js'
import { useRoute, useRouter } from 'vue-router'
// 
import { ElMessageBox } from 'element-plus'

let store = useLayoutSettingStore();
let userStore = useUserStore();
let $route = useRoute();
let $router = useRouter();

let fullScreen = () => {
    let isFullScreen = document.fullscreenElement;
    if (isFullScreen) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}
//登出
let logout = () => {
    ElMessageBox.confirm(
        '确定退出登录吗？',
        '警告',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        //清空store的token
        userStore.clearnToken();
        //跳转到登录页面
        $router.push("/login")
    }).catch(() => {
    })
}
</script>
<style scoped lang='scss'>
.topbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(rgb(180, 158, 158) rgb(235, 168, 168) rgb(160, 147, 147));

    .topbar_left {
        display: flex;
        align-items: center;
        padding: 0px 10px;
    }

    .topbar_right {
        display: flex;
        align-items: center;
    }
}
</style>