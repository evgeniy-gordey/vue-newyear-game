import Vue from 'vue'
import VueRouter from 'vue-router'
import VueYandexMetrika from 'vue-yandex-metrika' 

import store from '@/store'

import MainPage from '../pages/MainPage.vue'
import GiftsPage from '../pages/GiftsPage.vue'

const routes = [
  {
    path: '',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      { path: '', component: MainPage },
      { path: 'gifts', component: GiftsPage }
    ],
    meta: { lang: 'en' }
  },
  {
    path: '/ru',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      { path: '', component: MainPage },
      { path: 'gifts', component: GiftsPage }
    ],
    meta: { lang: 'ru' }
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior () { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('setLang', to.matched[0].meta.lang)
  Vue.mixin({
    computed: {
      $lang() {
        return to.matched[0].meta.lang || 'en'
      }
    }
  })
  next()
})

Vue.use(VueYandexMetrika, {
  id: 51664943,
  router: router,
  env: process.env.NODE_ENV,
  options: { webvisor: true }
})

export default router
