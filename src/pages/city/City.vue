<!--
 * @Author: your name
 * @Date: 2021-10-20 13:14:53
 * @LastEditTime: 2021-10-21 12:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\pages\city\City.vue
-->
<template>
<div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>
