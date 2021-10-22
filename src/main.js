/*
 * @Author: your name
 * @Date: 2021-10-03 14:43:19
 * @LastEditTime: 2021-10-22 20:22:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htmle:\travel\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'//规范
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper,
   /* { default options with global component } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* el:'#app',
router,
components:{ App },
template:'<App/>'
})
*/