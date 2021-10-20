<!--
 * @Author: your name
 * @Date: 2021-10-20 12:58:55
 * @LastEditTime: 2021-10-20 17:31:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\city\components\Header.vue
-->
<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div> 
        </router-link>
    </div> 
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    "@import '~styles/varibles.styl'"
    .header
     position: relative
     overflow: hidden
     height: $headerHeight
     line-height: .86rem
     text-align: center
     color:#fff
     background: $bgcolor
     font-size: .32rem
     
     .header-back
      position: absolute
      top:0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff

</style>