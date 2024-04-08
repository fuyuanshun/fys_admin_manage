<template>
    <svg :style="{width, height}">
        <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
</template>

<script setup>
    defineProps({
        iconName :{
            default:'leaf',
            type:String
        },
        width :{
            default:'100px',
            type:String
        },
        height :{
            default:'200px',
            type:String
        }
    })
</script>

<style>

</style>