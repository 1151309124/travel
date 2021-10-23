/*
 * @Author: your name
 * @Date: 2021-10-23 00:00:35
 * @LastEditTime: 2021-10-23 14:26:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  
})
