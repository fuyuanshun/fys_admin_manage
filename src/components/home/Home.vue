<template>
    <div class="main">
        主页
    </div>
</template>

<script setup>
    import useUserStore from '@/store/modules/useUserStore.js'
    let userStore = useUserStore();
    let userInfo = userStore.getUserInfo();
</script>

<style scoped lang="scss">
    .main{
        width:100%;
        height:100vh;
        background-color: rgb(66, 82, 82);
    }
</style>