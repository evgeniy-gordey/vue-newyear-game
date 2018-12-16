import Vue from 'vue'
import VueRouter from 'vue-router'
import Carousel3d from 'vue-carousel-3d';

import store from './store'
import router from './router'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Carousel3d)

Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
