
<!--
 * @Author: your name
 * @Date: 2021-10-15 18:28:06
 * @LastEditTime: 2021-10-21 20:59:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\home\components\Recommend.vue
-->
<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li 
            class="item border-bottom"
            v-for="item of list"
            :key="item.id"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
     props:{
        list:Array
    }
}
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'
    .title
     margin-top:.2rem
     line-height :.8rem
     background :#eee
     text-align :.2rem

    .item-img-wrapper
     overflow :hidden
     height :0
     padding :37.09%

     .item-img
      width :100%

    .item-info
     padding :.1rem

    .item-title
        line-height :.54rem 
        font-size :.32rem
        ellipsis()

    .item-desc
        line-height :.4rem
        color :#ccc
        ellipsis()

        
       

    
</style>