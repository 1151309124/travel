<!--
 * @Author: your name
 * @Date: 2021-10-20 22:26:00
 * @LastEditTime: 2021-10-22 23:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\city\components\List.vue
-->
<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title  border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
         <div class="area">
            <div class="title  border-topbottom">热门城市</div>
            <div class="button-list">
                <div 
                class="button-wrapper" 
                v-for="item of hot"
                :key="item.id"
                @click="handleCityClick(item.name)"
                
                >
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        
         <div 
         class="area" 
         v-for="(item, key) of cities" 
         :key="key"
         :ref="key"
         >
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div 
                class="item border-bottom"
                v-for="innerItem of item"
                :key="innerItem.id"
                @click="handleCityClick(item.name)"
                >
                {{innerItem.name}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name:'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter:String
    },
     computed: {
        ...mapState({
        currentCity: 'city'
     })
  },
    methods:{
        handleCityClick (city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter () {
            if(this.letter){
                const element =this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted () {
        this.scroll =new Bscroll(this.$refs.wrapper)
    },
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
     .border-topbottom
      &:before
       border-color: #ccc
      &:after
       border-color:#ccc
    
     .border-bottom
      &:before
       border-color: #ccc

    .list
     overflow: hidden
     position: absolute
     top: 1.58rem
     left: 0
     right: 0
     bottom: 0
    
    .title
     line-height: .44rem
     background: #eee
     padding-left:.2rem
     color: #666
     font-size: .26rem
    
    .button-list
     overflow: hidden
     padding: .1rem .6rem .1rem .1rem
     
     .button-wrapper
      float: left
      width:33.33%
       
    
    .item-list
     .item
      line-height: .76rem
      padding-left: .2rem
</style>
