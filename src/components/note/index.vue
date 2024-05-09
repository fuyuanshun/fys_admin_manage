<template>
        <Topbar exitUrl="/login"></Topbar>
    <div class="note-main-container" @mousedown="hiddenCustomMenu">
        <!-- 阻
import { login } from '../login/js/login';
止冒泡到父元素 -->
        <div class="foler-list" @contextmenu.stop.prevent="custom_menu" @mousedown.stop="hiddenCustomMenu" >
            <ul>
                <li class="folder-item">1</li>
                <li class="folder-item">2</li>
                <li class="folder-item">3</li>
                <li class="folder-item">4</li>
            </ul>
        </div>
        <div class="note-info">
            
        </div>
    </div>

    <!-- 自定义菜单 -->
    <div id="custom-menu" ref="customMenu" @blur="hiddenCustomMenu">
        <p id="new_folder">新建<SvgIcon width="10px" height="10px" iconName="arrow-right-filling"></SvgIcon></p>
        <p>删除</p>
        <p>重命名</p>
        <p>移动</p>
        <p>复制</p>
        <p>更多<SvgIcon width="10px" height="10px" iconName="arrow-right-filling"></SvgIcon></p>
    </div>
</template>
<script setup>
    import Topbar from '@/components/topbar/index.vue'
    import useUserStore from '@/store/modules/useUserStore.js'
    import {onMounted} from 'vue'
    let userStore = useUserStore();
    // 获取用户信息，解析头像和用户名放到页头
    let userInfo = userStore.getUserInfo();
    
    function hiddenCustomMenu(event){
        let customMenu = document.getElementById("custom-menu");
        if(customMenu.style.display === 'block'){
            customMenu.style.display = 'none';
        }
    }

    function custom_menu(event){
        if(event.clientX < 200 && event.clientY < 1000){
            // 获取自定义菜单元素
            const menu = document.getElementById('custom-menu');
            
            // 设置自定义菜单的位置并显示
            menu.style.top = `${event.clientY}px`;
            menu.style.left = `${event.clientX}px`;
            menu.style.display = 'block';
        }    
    }
</script>
<style scoped lang='scss'>
    .note-main-container {
        height: 100vh;
        background-color: #FFF;
        display: flex;
        margin-top: 20px;

        .foler-list {
            width: 200px;
            height: 100%;
            background-color: #F9FAFB;

            context-menu: none;

            li {
                padding-left: 10px;
            }

            li:hover {
                background-color: gray;
                background-clip: border-box;
            }
        }

        ul {
            margin-top: 12px;
        }

        .folder-item {
            height: 20px;
            margin-top: 5px;

        }

        .note-info {
            width: calc(100% - 200px);
            height: 100%;
            margin-left: 30px;
            box-shadow: -1px 0 5px;
            border-radius: 5px;

        }
    }

    #custom-menu {
        display: none;
        position: absolute;
        background-color: white;
        border-radius: 5px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 15px;
    }
    #custom-menu p {
        margin: 5px;
        margin-bottom: 0;
        padding-bottom: 5px;
        border-bottom: 1px solid gray;
    }
    #custom-menu p:hover {
        background-color: #F0F3F5;
    }
    #new_folder:hover {

    }
</style>