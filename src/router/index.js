import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage.vue'
import GiftsPage from '../pages/GiftsPage.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/gifts', component: GiftsPage },
  ]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior () { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

export default router
