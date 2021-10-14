<!--
 * @Author: your name
 * @Date: 2021-10-04 14:46:35
 * @LastEditTime: 2021-10-13 18:10:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \htmle:\travel\src\pages\home\home.vue
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