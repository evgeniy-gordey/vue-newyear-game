import Vue from 'vue';
import Vuex from 'vuex'

import elements from './elements.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lang: null,
    isMuted: false,
    isStarted: false,
    allElements: elements,
    foundElements: []
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang
    },
    triggerisMuted(state) {
      state.isMuted = !state.isMuted
    },
    addFoundElement(state, name) {
      state.foundElements = [ ...state.foundElements, name ]
    },
    startGame(state) {
      state.isStarted = true
    }
  },
  getters: {
    lang: state => state.lang,
    isMuted: state => state.isMuted,
    isStarted: state => state.isStarted,
    allElements: state => state.allElements,
    foundElements: state => state.foundElements,
  }
})

export default store
