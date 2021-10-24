/*
 * @Author: your name
 * @Date: 2021-10-04 15:23:53
 * @LastEditTime: 2021-10-23 14:53:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },{
            path: '/city',
            name: 'City',
            component: City
        },{
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }]
})