import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPassword(state, password) {
      state.password = password
    },
    setEmail(state, email) {
      state.email = email
    }
  },
  state: {
    user: {},
    password: {},
    email: {}
  },
  plugins: [vuexLocal.plugin]
})
export default createStore({ vuexLocal, strict: true })
