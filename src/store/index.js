import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    cart,
    category,
  },
  plugins: [vuexLocal.plugin]
})
