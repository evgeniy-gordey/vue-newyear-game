import Vue from 'vue';
import Vuex from 'vuex'

import elements from './elements.json'

Vue.use(Vuex)

const store = () => (
  new Vuex.Store({
    state: {
      lang: 'en',
      isMute: false,
      isStarted: false,
      elementsList: elements,
      foundedElements: []
    },
    mutations: {
      setLang(state, lang) {
        state.lang = lang
      },
      triggerIsMute(state) {
        state.isMute = !state.isMute
      },
      addFoundedElement(state, name) {
        state.foundedElements = [ ...state.foundedElements, name ]
      },
      startGame(state) {
        state.isStarted = true
      }
    },
    getters: {
      lang: state => state.lang,
      isMute: state => state.isMute,
      isStarted: state => state.isStarted,
      elementsList: state => state.elementsList,
      foundedElements: state => state.foundedElements,
    }
  })
)

export default store
