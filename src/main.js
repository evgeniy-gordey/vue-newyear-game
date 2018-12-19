import Vue from 'vue'
import VueRouter from 'vue-router'
import Carousel3d from 'vue-carousel-3d';
import VueQRCodeComponent from 'vue-qrcode-component'
import Meta from 'vue-meta'

import store from './store'
import router from './router'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Carousel3d)
Vue.use(Meta)
Vue.component('qr-code', VueQRCodeComponent)

Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
