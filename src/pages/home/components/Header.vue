<!--
 * @Author: your name
 * @Date: 2021-10-05 23:20:38
 * @LastEditTime: 2021-10-22 23:56:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\home\components\Header.vue
-->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
     </router-link>
  </div>
</template>

<script>
import {  mapState ,mapGetters } from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
//scoped只对这个组件产生影响
</script>
<style lang="stylus" scoped>
.header 
  display:flex;
  line-height:$headerHeight;
  background:#bgColor;
  color:#fff
    
  .header-left 
    width:.64rem;
    float: left;

    .back-icon
      text-align: center
      font-size:.4rem

  .header-input 
    flex: 1
    height:.64rem
    line-height:.64rem
    margin-top:.12rem
    margin-left:.2rem
    padding-left: .2rem
    background:#fff
    border-radius:.1rem
    color:#ccc

  .header-right 
    width: 1.04rem;
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    
    .arrow-icon
     margin-left: -.04rem
     font-size:.24rem

</style>