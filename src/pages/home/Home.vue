<!--
 * @Author: your name
 * @Date: 2021-10-15 18:12:04
 * @LastEditTime: 2021-10-15 18:12:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\home\Home.vue
-->

<template>
  <div>
   <home-header></home-header> 
   <home-swiper></home-swiper>
   <home-icons></home-icons>
  </div>
</template>

<script> 
import HomeHeader from './components/Header' 
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: "home",
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
};
</script>

<style>
</style>
