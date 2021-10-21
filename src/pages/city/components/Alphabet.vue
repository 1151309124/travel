<!--
 * @Author: your name
 * @Date: 2021-10-21 00:14:12
 * @LastEditTime: 2021-10-21 12:53:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\city\components\Alphabet.vue
-->
<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
    "@import '~styles/varibles.styl'"
    .list
     display: flex
     flex-direction: column
     justify-content: center
     position: absolute
     top 1.58rem
     right: 0
     bottom: 0
     width: .4rem

     .item
      list-height: .4rem
      text-align: center
      color: $bgColor

</style>