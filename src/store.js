import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
console.log(new VuexPersistence({ storage: localStorage }))

const mutations = {
    setUser(state, user) {
      state.user = user
    },
    setPassword(state, password) {
      state.password = password
    },
    setEmail(state, email) {
      state.email = email
    },
    setName(state, username) {
      state.username = username
    }
  },
  state = {
    user: {},
    password: {},
    email: {},
    username: {}
  }

export default createStore({
  mutations,
  plugins: [new VuexPersistence({ storage: localStorage }).plugin],
  state,
  strict: true
})
