<!--
 * @Author: your name
 * @Date: 2021-10-23 14:43:42
 * @LastEditTime: 2021-10-24 20:19:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\detail\Detail.vue
-->
<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script> 
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header'
export default {
    name:'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>

<style lang="stylus" scoped>
    .content {
        height: 50rem    
    }
</style>
