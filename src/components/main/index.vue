<template>
    <div>
        <!-- 如果直接使用仓库的值，会变成控制是否展示的效果 -->
        <!-- 所以使用中间变量flag，监听仓库的值，使用flag完成刷新 -->
        <router-view v-if="flag"></router-view>
    </div>
</template>

<script>
    export default {
        name : 'Main'
    }
</script>
<script setup>
    import {ref, watch, nextTick} from 'vue';
    import useLayoutSettingStore from '@/store/modules/useLayoutSettingStore.js'
    let store = useLayoutSettingStore();

    //使用中间变量完成刷新功能
    let flag = ref(true);
    // 监听refresh属性
    watch(()=>store.refresh, ()=>{
        //false销毁组件
        flag.value = false;
        //重新加载dom后再创建组件
        nextTick(()=>{
            flag.value = true;
        })
    })
</script>
<style scoped lang='scss'>
</style>