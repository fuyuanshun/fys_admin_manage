<template>
    <div class="main-container">
        <div class="container topbar">
            <div class="logo">
                <img src="" alt="LOGO">
            </div>
            <div class="go-login">
                <span>去</span>
                <a href="/#/login">登陆</a>
            </div>
        </div>

        <div class="container content">

        </div>

        <footer class="footer">
            <div class="links">

            </div>
            <div class="ipc">
                <img src="@/assets/img/备案图标.png" alt="备案图标" width="16px">
                <a href="https://beian.mps.gov.cn/#/query/webSearch?code=41140002000756" rel="noreferrer" target="_blank">豫公网安备41140002000756</a>
                <a href="beian.miit.gov.cn">豫ICP备2024057254</a>
            </div>
        </footer>
    </div>
    
    
</template>
<script setup>
    
</script>
<style scoped lang='scss'>

    // 版心
    .container {
        width: 1190px;
        margin: 0 auto;
    }

    // 页头
    .topbar {
        display: flex;
        justify-content: space-between;
    }

    // 主内容区
    .content {
        height: 1000px;
        background-image: url('@/assets/img/bg01.jpg');
        margin: 50px auto;
    }

    //页脚
    .footer {
        height: 400px;
        background-color: #F4F4F4;

        .links {
            height: 300px;
        }

        .ipc {
            display: flex;
            justify-content: center;
            img {
                margin-right: 5px;
            }
            a {
                text-decoration: none;
                color: #999999;
                padding-right: 10px;
                border-right: 1px solid #999999;
                margin-right: 10px;
            }
            a:last-child {
                border-right: 0;
                margin-right: 0;
            }
        }
    }
</style>