import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss' // globl css
import './icons' // icons
import './permission' // permission control
import ElementUI from 'element-ui' // element-ui
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// import '../mock' // mockjs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
