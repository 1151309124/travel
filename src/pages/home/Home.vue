<!--
 * @Author: your name
 * @Date: 2021-10-04 14:46:35
 * @LastEditTime: 2021-10-13 17:21:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \htmle:\travel\src\pages\home\home.vue
-->
<template>
  <div>
   <home-header></home-header> 
   <home-swiper></home-swiper>

  </div>
</template>

<script> 
import HomeHeader from './components/Header' 
import HomeSwiper from './components/Swiper' 
export default {
  name: "home",
  components:{
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style>
</style>