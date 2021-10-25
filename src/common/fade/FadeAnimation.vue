<!--
 * @Author: your name
 * @Date: 2021-10-25 21:33:33
 * @LastEditTime: 2021-10-25 21:46:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\common\fade\Fade.vue
-->
<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script>
export default {
    name:'Fade'
}
</script>

<style lang="stylus" scoped>
    .v-enter,.v-leave-to{
        opacity :0
    }
    .v-enter-active, .v-leave-active{
        transition: opacity .5s
    }

</style>