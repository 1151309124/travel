/*
 * @Author: your name
 * @Date: 2021-10-03 14:43:19
 * @LastEditTime: 2021-10-04 21:00:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'//规范
//import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  //store,
  render: h => h(App)
}).$mount('#app')

/* el:'#app',
router,
components:{ App },
template:'<App/>'
})
*/