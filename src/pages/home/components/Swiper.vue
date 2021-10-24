<!--
 * @Author: your name
 * @Date: 2021-10-11 23:12:12
 * @LastEditTime: 2021-10-24 17:44:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\home\components\Swiper.vue
-->
<template>
<div class="wrapper">
  <swiper :options="swiperOptions" v-if="list.length">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
   
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  data () {
    return {
      swiperOptions: {
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  },
  computed:{
    showSwiper(){
      return this.list.length
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrapper >>>.swiper-pagination-bullet-active
  background:#fff 
.wrapper  
  overflow:hidden
  width:100%
  height:0 
  padding-bottom:27.12%
  background:#eee
  .swiper-img
   width:100%
   height: 100%
</style>