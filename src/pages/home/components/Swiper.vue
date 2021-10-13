<!--
 * @Author: your name
 * @Date: 2021-10-11 23:12:12
 * @LastEditTime: 2021-10-13 17:28:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\home\components\Swiper.vue
-->
<template>
<div class="wrapper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
   
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOptions: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[{
        id:'0001',
        imgUrl:'https://www.12306.cn/index/images/abanner01.jpg'
      },{
        id:'0002',
        imgUrl:'https://www.12306.cn/index/images/abanner02.jpg'
      }]
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
</style>