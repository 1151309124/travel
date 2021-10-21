<!--
 * @Author: your name
 * @Date: 2021-10-20 12:58:55
 * @LastEditTime: 2021-10-21 20:54:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\city\components\Header.vue
-->
<template>
    <div class="search">
        <input type="text" placeholder="输入城市名字或拼音"/>
    </div>
</template>

<script>
export default {
    name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .search
     height: .72rem
     padding: 0 .1rem
     background: $bgColor
     .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0  .1rem
      line-height: .62rem
      text-align: center
      border-radius:.06rem
      color: #666
</style>
