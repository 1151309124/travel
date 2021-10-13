/*
 * @Author: your name
 * @Date: 2021-10-03 14:43:19
 * @LastEditTime: 2021-10-11 23:30:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'//规范
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'
//import store from './store'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper,
   /* { default options with global component } */)
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