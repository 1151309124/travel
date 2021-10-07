<!--
 * @Author: your name
 * @Date: 2021-10-05 23:20:38
 * @LastEditTime: 2021-10-07 22:15:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\home\components\Header.vue
-->
<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
}
//scoped只对这个组件产生影响
</script>
<style lang="stylus" scoped>
.header 
  display:flex;
  line-height:.86rem;
  background:#00bcd4;
  color:#fff
    
.header-left 
    width:.64rem;
    float: left;

.header-input 
    flex: 1
    height:.64rem
    line-height:.64rem
    margin-top:.12rem
    margin-left:.2rem
    background:#fff
    border-border-radius:.1rem
    color:#ccc
.header-right 
  diwth: 1.24rem;
  float: right;
  text-align: center;

</style>