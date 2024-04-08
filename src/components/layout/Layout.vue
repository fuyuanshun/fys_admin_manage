<template>
    <div class="layout_container">
        <!-- 导航栏 -->
        <div class="layout_slider" :class="layoutSettingStore.fold?'fold':''">
            <!-- Logo -->
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <el-menu :collapse="layoutSettingStore.fold" :default-active="$route.path" background-color="#001529" text-color="white" :router="true">
                    <!-- 菜单栏 -->
                    <Menu :menuList="store.menuList"></Menu>
                 </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部菜单 -->
        <div class="layout_topbar" :class="layoutSettingStore.fold?'fold':''">
            <Topbar></Topbar>
        </div>
        <!-- 内容 -->
        <div class="layout_main" :class="layoutSettingStore.fold?'fold':''">
            <Main></Main>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
import Menu from '@/components/layout/Menu.vue'
import Topbar from '@/components/topbar/index.vue'
import Main from '@/components/main/index.vue'
import useUserStore from '@/store/modules/useUserStore.js'
import useLayoutSettingStore from '@/store/modules/useLayoutSettingStore.js'
import {useRoute} from 'vue-router'

let $route = useRoute();
let store = useUserStore();
let layoutSettingStore = useLayoutSettingStore();

</script>

<style scoped lang="scss">
    .layout_container{
        width: 100%;
        height: 100vh;

        .layout_slider{
            width: 260px;
            height: 100vh;
            background-color: #001529;
            transition: all 0.2s;

            .scrollbar{
                color:white;
                height:calc(100vh - 100px);
                width:100%;

                .el-menu{
                    border-right: none;
                }
            }
            //根据折叠状态控制是否展示该样式
            &.fold{
                width: 50px;
            }
        }
        .layout_topbar{
            position: fixed;
            width: calc(100% - 260px);
            height: 50px;
            top:0px;
            left:260px;
            transition: all 0.2s;

            &.fold{
                width: calc(100vw - 50px);
                left: 50px;
            }
        }
        .layout_main{
            position: absolute;
            //要减去padding的大小*2
            height: calc(100vh - 50px - 40px);
            width: calc(100% - 260px - 40px);
            top: 50px;
            left: 260px;
            padding: 20px;
            overflow: auto;
            transition: all 0.2s;

            &.fold{
                width:  calc(100vw - 50px);
                left: 50px;
            }
        }
    }
    
</style>