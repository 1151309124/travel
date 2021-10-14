<!--
 * @Author: your name
 * @Date: 2021-10-13 18:07:43
 * @LastEditTime: 2021-10-14 23:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\home\components\Icons.vue
-->
<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages"  :key="index">    
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class='icon-img-content' :src='item.imgUrl'/>
                    </div>
                 <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>

export default {
    name:'HomeIcons',
    data (){
        return{
            iconList:[{
                id:'0001',
                imgUrl:'//m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png',
                desc:'话费'
            },{
            
                id:'0002',
                imgUrl:'//m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png',
                desc:'机票'
        },{
            
                id:'0003',
                imgUrl:'//m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png',
                desc:'酒店'
        },{
            
                id:'0004',
                imgUrl:'//m.360buyimg.com/babel/jfs/t1/32403/22/14829/3699/5cbf0674E04723693/caa83ce9b881cd24.png',
                desc:'游戏'
        },{
            
                id:'0005',
                imgUrl:'https://m.360buyimg.com/babel/jfs/t1/71890/14/9897/3048/5d7739ddE93eb94f8/f1f6dc5c207329f9.png',
                desc:'加油卡'
        },{
            
                id:'0006',
                imgUrl:'https://m.360buyimg.com/babel/jfs/t1/45761/32/10307/1581/5d7739e2Ece4b6671/0004c1b85fbf7bde.png',
                desc:'火车票'
        },{
            
                id:'0007',
                imgUrl:'https://m.360buyimg.com/babel/jfs/t1/52683/35/10394/3447/5d7739edE270aa7b3/d4d1151b09b5553b.png',
                desc:'理财'
        },{
            
                id:'0008',
                imgUrl:'https://m.360buyimg.com/babel/jfs/t1/60778/37/9838/3066/5d7739faEd3b7dbb9/dd4d9ef7ce8fc169.png',
                desc:'电影票'
        },{
    
                id:'0009',
                imgUrl:'https://m.360buyimg.com/babel/jfs/t1/57014/6/10297/815/5d773a07Ec7a61fc9/97917a2daa34be0f.png',
                desc:'礼品卡'
        }]
    } 
},
computed:{
    pages () {
    const pages= []
    this.iconList.forEach((item, index) => {
        const page= Math.floor(index / 8)
        if(!pages[page]) {
            pages[page]=[]
        }
        pages[page].push(item)
    })
        return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
    "@import '~styles/varibles.styl'"
    "@import '~styles/mixins.styl'"
    
   .icons >>> .swiper-container
    height:0
    padding-bottom:50%

    .icon
      position:relative
      overflow:hidden
      float:left
      width:25%
      height:0
      padding-bottom:25%
       
     .icon-img
       position:absolute
       top:0
       left:0
       right:0
       bottom 0.44rem
       box-sizing:border-box
       padding 0.1rem
        
        .icon-img-content
         display:block
         margin:0 auto
         height:100%

        .icon-desc 
          position:absolute
          left:0
          right:0
          bottom:0
          height:0.44rem
          line-height:0.44rem
          text-align:center
          color:$darkTextColor
          ellipsis()
          
</style> 
