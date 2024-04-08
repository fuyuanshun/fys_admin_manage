<template>
    <template v-for="menu in menuList">
        <!-- 并且当前菜单没有隐藏时，子菜单为1并且子菜单是隐藏。或者没有子菜单时 -->
        <el-menu-item v-if="(!menu.meta.hidden && menu.children && menu.children.length === 1 && menu.children[0].meta.hidden) || (!menu.children && !menu.meta.hidden)" :index="menu.path">
            <el-icon>
                <component :is="menu.meta.icon"></component>
            </el-icon>
            <template #title>
                <span>{{menu.meta.title}}</span>
            </template>
        </el-menu-item>
        <!--  -->
        <el-sub-menu v-else-if="!menu.meta.hidden && menu.children && menu.children.length >= 1" :index="menu.path">

            <template #title>
                <el-icon>
                    <component :is="menu.meta.icon"></component>
                </el-icon>
                <span>{{menu.meta.title}}</span>
            </template>
            
            <Menu :menuList="menu.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<!-- 组件要起名字，否则递归会出问题 -->
<script>
    export default {
        name :'Menu'
    }
</script>
<script setup>

    
    defineProps(['menuList'])
</script>
<style scoped lang='scss'>

</style>