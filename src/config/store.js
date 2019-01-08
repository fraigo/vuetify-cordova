import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import state from '../data/state'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store(
  {
    state: state,
    mutations: {
      update (state, payload) {
        var type = payload[0]
        var name = payload[1]
        if (payload.length >= 3) {
          var value = payload[2]
          state[type][name] = value
        } else {
          state[type] = name
        }
      }
    },
    plugins: [
      vuexLocal.plugin
    ]
  }
)

